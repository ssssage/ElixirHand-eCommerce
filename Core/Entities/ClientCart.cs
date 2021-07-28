using System;
using System.Collections.Generic;
using System.Text;

namespace Core.Entities
{
    public class ClientCart
    {
        public ClientCart()
        {
        }

        public ClientCart(string id)
        {
            Id = id;
        }

        public string Id { get; set; }
        public List<CartItem> Items { get; set; } = new List<CartItem>();
        public int? DeliveryMethodId { get; set; }
        public string ClientSecret { get; set; }
        public string PaymentIntentId { get; set; }
        public decimal ShippingPrice { get; set; }
    }
}
