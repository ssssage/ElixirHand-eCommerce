using API.Dtos;
using API.Errors;
using API.Helpers;
using AutoMapper;
using Core.Entities;
using Core.Interfaces;
using Core.Specifications;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{

    public class ProductsController : BaseApiController
    {
        private readonly IMapper _mapper;
        private readonly IGenericRepository<Product> _productRepo;
        private readonly IGenericRepository<ProductBrand> _productBrandRepo;
        private readonly IGenericRepository<ProductType> _productTypeRepo;

        public ProductsController(IGenericRepository<Product> productRepo,
           IGenericRepository<ProductBrand> productBrandRepo,
           IGenericRepository<ProductType> productTypeRepo,
           IMapper mapper)
        {
            _mapper = mapper;
            _productRepo = productRepo;
            _productBrandRepo = productBrandRepo;
            _productTypeRepo = productTypeRepo;
        }
        [HttpGet]
        public async Task<ActionResult<Pagination<ProductToReturnDto>>> GetProducts(
            [FromQuery]ProductSpecParams productSpecParams)
        {
            var spec = new ProductsWithTypesAndBrandsSpecification(productSpecParams);

            var countSpec = new ProductWithFiltersForCountSpecificication(productSpecParams);

            var totalItems = await _productRepo.CountAsync(countSpec);

            var products = await _productRepo.ListAsync(spec);

            var data = _mapper.Map<IReadOnlyList<Product>, IReadOnlyList<ProductToReturnDto>>(products);

            return Ok(new Pagination<ProductToReturnDto>(productSpecParams.PageIndex, productSpecParams.PageSize, totalItems, data));
        }

        [HttpGet("{id}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(typeof(ApiResponse), StatusCodes.Status404NotFound)]
        public async Task<ActionResult<ProductToReturnDto>> GetProduct(int id)
        {
            var spec = new ProductsWithTypesAndBrandsSpecification(id);

            var product = await _productRepo.GetEntityWithSpec(spec);

            if(product == null) return NotFound(new ApiResponse(404));
            return _mapper.Map<Product, ProductToReturnDto>(product);
        }

        [HttpPost]
        public async Task<ActionResult<ProductToReturnDto>> CreateProduct(ProductCreateDto productCreateDto)
        {
            // Map the DTO to the Product entity
            var product = _mapper.Map<ProductCreateDto, Product>(productCreateDto);

            // Assuming ProductType and ProductBrand are already in the database and known
            // Retrieve ProductType and ProductBrand entities
            var productType = await _productTypeRepo.GetByIdAsync(productCreateDto.ProductTypeId);
            var productBrand = await _productBrandRepo.GetByIdAsync(productCreateDto.ProductBrandId);

            // Assign retrieved entities to the product
            product.ProductType = productType;
            product.ProductBrand = productBrand;

            // Add product to repository
            _productRepo.Add(product);
            await _productRepo.SaveAsync();

            // Map the created product back to ProductToReturnDto
            var productToReturn = _mapper.Map<Product, ProductToReturnDto>(product);

            // Return the created product DTO
            return CreatedAtAction(nameof(GetProduct), new { id = product.Id }, productToReturn);
        }

              
        [HttpPut("{id}")]
        public async Task<ActionResult<ProductToReturnDto>> UpdateProduct(int id, ProductUpdateDto productUpdateDto)
        {
            var product = await _productRepo.GetByIdAsync(id);

            if (product == null) return NotFound(new ApiResponse(404));

            _mapper.Map(productUpdateDto, product);

            _productRepo.Update(product);
            await _productRepo.SaveAsync();

            var productToReturn = _mapper.Map<Product, ProductToReturnDto>(product);
            return Ok(productToReturn);
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> DeleteProduct(int id)
        {
            var product = await _productRepo.GetByIdAsync(id);

            if (product == null) return NotFound(new ApiResponse(404));

            _productRepo.Delete(product);
            await _productRepo.SaveAsync();

            return NoContent();
        }

        [HttpGet("brands")]
        public async Task<ActionResult<IReadOnlyList<ProductBrand>>> GetProductBrands()
        {
           return Ok(await _productBrandRepo.ListAllAsync());
        }


        [HttpGet("types")]
        public async Task<ActionResult<IReadOnlyList<ProductType>>> GetProductTypes()
        {
            return Ok(await _productTypeRepo.ListAllAsync());
        }
    }
}