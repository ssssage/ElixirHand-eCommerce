using Core.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace Core.Specifications
{
    public class ProductWithFiltersForCountSpecificication : BaseSpecification<Product>
    {
        public ProductWithFiltersForCountSpecificication(ProductSpecParams productSpecParams)
            : base(x =>
              (string.IsNullOrEmpty(productSpecParams.Search) || x.Name.ToLower().Contains
              (productSpecParams.Search)) &&
              (!productSpecParams.BrandId.HasValue || x.ProductBrandId == productSpecParams.BrandId) &&
              (!productSpecParams.TypeId.HasValue || x.ProductTypeId == productSpecParams.TypeId)
            )
        {

        }
    }
}
