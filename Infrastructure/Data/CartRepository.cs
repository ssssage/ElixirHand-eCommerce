using Core.Entities;
using Core.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Infrastructure.Data
{
    public class CartRepository : ICartRepository
    {
        public Task<bool> DeleteCartAsync(string cartId)
        {
            throw new NotImplementedException();
        }

        public Task<ClientCart> GetCartAsync(string cartId)
        {
            throw new NotImplementedException();
        }

        public Task<ClientCart> UpdateCartAsync(ClientCart clientCart)
        {
            throw new NotImplementedException();
        }
    }
}
