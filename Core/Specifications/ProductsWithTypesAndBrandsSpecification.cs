using Core.Entities;
using System;
using System.Linq.Expressions;

namespace Core.Specifications
{
    public class ProductsWithTypesAndBrandsSpecification : BaseSpecification<Product>
    {
        public ProductsWithTypesAndBrandsSpecification()
        {
            AddInclue(x => x.ProductType);
            AddInclue(x => x.ProductBrand);
        }

        public ProductsWithTypesAndBrandsSpecification(int id) : base(x => x.Id == id)
        {
            AddInclue(x => x.ProductType);
            AddInclue(x => x.ProductBrand);
        }
    }
}
