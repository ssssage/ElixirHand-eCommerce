using API.Dtos;
using AutoMapper;
using Core.Entities;

namespace API.Helpers
{
    public class ProductUrlResolver : IValueResolver<Product, ProductToReturnDto, string>
    {
        private readonly IConfiguration _config;

        public ProductUrlResolver(IConfiguration config)
        {
            _config = config;
        }
        public string Resolve(Product source, ProductToReturnDto destination,
            string destMember, ResolutionContext context)
        {
            if (!string.IsNullOrEmpty(source.PictureUrl))
            {
                return _config["ApiUrl"] + source.PictureUrl;
            }
            return null;
        }
    }
    public class ProductUrlResolverForProductUpdateDto : IValueResolver<Product, ProductUpdateDto, string>
    {
        private readonly IConfiguration _config;

        public ProductUrlResolverForProductUpdateDto(IConfiguration config)
        {
            _config = config;
        }
        public string Resolve(Product source, ProductUpdateDto destination,
            string destMember, ResolutionContext context)
        {
            if (!string.IsNullOrEmpty(source.PictureUrl))
            {
                return _config["ApiUrl"] + source.PictureUrl;
            }
            return null;
        }
    }

 }
