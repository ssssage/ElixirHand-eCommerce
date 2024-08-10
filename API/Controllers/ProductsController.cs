using API.Dtos;
using API.Errors;
using API.Helpers;
using AutoMapper;
using Core.Entities;
using Core.Interfaces;
using Core.Specifications;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    //[Authorize]
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
            [FromQuery] ProductSpecParams productSpecParams)
        {
            var spec = new ProductsWithTypesAndBrandsSpecification(productSpecParams);

            var countSpec = new ProductWithFiltersForCountSpecificication(productSpecParams);

            var totalItems = await _productRepo.CountAsync(countSpec);

            var products = await _productRepo.ListAsync(spec);

            var data = _mapper.Map<IReadOnlyList<Product>, IReadOnlyList<ProductToReturnDto>>(products);

            return Ok(new Pagination<ProductToReturnDto>(productSpecParams.PageIndex, productSpecParams.PageSize, totalItems, data));
        }

        // Client endpoint
        [HttpGet("{id}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(typeof(ApiResponse), StatusCodes.Status404NotFound)]
        public async Task<ActionResult<ProductToReturnDto>> GetProduct(int id)
        {
            var spec = new ProductsWithTypesAndBrandsSpecification(id);

            var product = await _productRepo.GetEntityWithSpec(spec);

            if (product == null) return NotFound(new ApiResponse(404));
            //return Ok(product);
            return _mapper.Map<Product, ProductToReturnDto>(product);
        }

        // Admin endpoint
        [HttpGet("admin/{id}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(typeof(ApiResponse), StatusCodes.Status404NotFound)]
        public async Task<ActionResult<Product>> GetProductForAdmin(int id)
        {
            var spec = new ProductsWithTypesAndBrandsSpecification(id);

            var product = await _productRepo.GetEntityWithSpec(spec);

            if (product == null) return NotFound(new ApiResponse(404));

            return Ok(product);
        }

        [HttpGet("brands")]
        public async Task<ActionResult<IReadOnlyList<ProductBrand>>> GetProductBrands()
        {
            return Ok(await _productBrandRepo.ListAllAsync());
        }


        [HttpGet("brands/{id}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(typeof(ApiResponse), StatusCodes.Status404NotFound)]
        public async Task<ActionResult<ProductBrand>> GetProductBrandById(int id)
        {
            var productBrand = await _productBrandRepo.GetByIdAsync(id);

            if (productBrand == null)
            {
                return NotFound(new ApiResponse(404, "Product brand not found"));
            }

            return Ok(productBrand);
        }

        [HttpGet("types")]
        public async Task<ActionResult<IReadOnlyList<ProductType>>> GetProductTypes()
        {
            return Ok(await _productTypeRepo.ListAllAsync());
        }

        [HttpGet("types/{id}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(typeof(ApiResponse), StatusCodes.Status404NotFound)]
        public async Task<ActionResult<ProductType>> GetProductTypeById(int id)
        {
            var productType = await _productTypeRepo.GetByIdAsync(id);

            if (productType == null)
            {
                return NotFound(new ApiResponse(404, "Product type not found"));
            }

            return Ok(productType);
        }


        [HttpPost]
        [ProducesResponseType(StatusCodes.Status201Created)]
        [ProducesResponseType(typeof(ApiResponse), StatusCodes.Status400BadRequest)]
        public async Task<ActionResult<ProductToReturnDto>> CreateProduct(ProductCreateDto productCreateDto)
        {
            var product = _mapper.Map<ProductCreateDto, Product>(productCreateDto);
            _productRepo.Add(product);
            await _productRepo.SaveChangesAsync();

            var productToReturn = _mapper.Map<Product, ProductToReturnDto>(product);
            return CreatedAtAction(nameof(GetProduct), new { id = product.Id }, productToReturn);
        }

        [HttpPut("{id}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(typeof(ApiResponse), StatusCodes.Status400BadRequest)]
        [ProducesResponseType(typeof(ApiResponse), StatusCodes.Status404NotFound)]
        public async Task<ActionResult<ProductUpdateDto>> UpdateProduct(int id, ProductUpdateDto productUpdate)
        {
            var spec = new ProductsWithTypesAndBrandsSpecification(id);
            var product = await _productRepo.GetEntityWithSpec(spec);

            if (product == null) return NotFound(new ApiResponse(404));

            _mapper.Map(productUpdate, product);

            // Ensure that the Id is not changed
            //product.Id = id;

            product.ProductTypeId = productUpdate.ProductTypeId;
            product.ProductBrandId = productUpdate.ProductBrandId;

            _productRepo.Update(product);
            await _productRepo.SaveChangesAsync();

            return Ok(_mapper.Map<Product, ProductToReturnDto>(product));
        }


        [HttpDelete("{id}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(typeof(ApiResponse), StatusCodes.Status404NotFound)]
        public async Task<ActionResult> DeleteProduct(int id)
        {
            var product = await _productRepo.GetByIdAsync(id);

            if (product == null) return NotFound(new ApiResponse(404));

            _productRepo.Delete(product);
            await _productRepo.SaveChangesAsync();

            return Ok();
        }

        //[HttpPost("upload-image")]
        //public async Task<IActionResult> UploadImage(IFormFile file)
        //{
        //    if (file == null || file.Length == 0)
        //        return BadRequest("No file uploaded.");

        //    // Validate file extension
        //    var validExtensions = new[] { ".jpg", ".jpeg", ".png" };
        //    var ext = Path.GetExtension(file.FileName).ToLowerInvariant();

        //    // Validate MIME type
        //    var validMimeTypes = new[] { "image/jpeg", "image/png" };
        //    if (!validExtensions.Contains(ext) || !validMimeTypes.Contains(file.ContentType.ToLowerInvariant()))
        //    {
        //        return BadRequest("Invalid file type. Only .jpg and .png files are allowed.");
        //    }

        //    var imageName = $"{file.FileName}";
        //    var path = Path.Combine("Content/images/products", imageName);

        //    using (var stream = new FileStream(path, FileMode.Create))
        //    {
        //        await file.CopyToAsync(stream);
        //    }

        //    return Ok(new { ImageUrl = $"images/products/{imageName}" });
        //}

        [HttpPost("upload-image")]
        public async Task<IActionResult> UploadImage(IFormFile file)
        {
            if (file == null || file.Length == 0)
                return BadRequest("No file uploaded.");

            // Validate file extension
            var validExtensions = new[] { ".jpg", ".jpeg", ".png" };
            var ext = Path.GetExtension(file.FileName).ToLowerInvariant();

            // Validate MIME type
            var validMimeTypes = new[] { "image/jpeg", "image/png" };
            if (!validExtensions.Contains(ext) || !validMimeTypes.Contains(file.ContentType.ToLowerInvariant()))
            {
                return BadRequest("Invalid file type. Only .jpg and .png files are allowed.");
            }

            // Build the path where the image should be saved
            string baseDir = Path.Combine(Directory.GetCurrentDirectory(), "Content", "images", "products");

            if (!Directory.Exists(baseDir))
            {
                Directory.CreateDirectory(baseDir);
            }

            var imageName = $"{file.FileName}";
            var path = Path.Combine(baseDir, imageName);

            using (var stream = new FileStream(path, FileMode.Create))
            {
                await file.CopyToAsync(stream);
            }

            // Return the relative URL for the saved image
            return Ok(new { PictureUrl = $"/images/products/{imageName}" });
        }




    }
}