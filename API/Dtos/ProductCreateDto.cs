using System.ComponentModel.DataAnnotations;

namespace API.Dtos
{
    public class ProductCreateDto
    {
        public string Name { get; set; }
        public string Description { get; set; }
        public decimal Price { get; set; }
        public string PictureUrl { get; set; }
        public string ProductType { get; set; }
        public string ProductBrand { get; set; }

        public int ProductTypeId { get; set; }
        public int ProductBrandId { get; set; }


    }
}
