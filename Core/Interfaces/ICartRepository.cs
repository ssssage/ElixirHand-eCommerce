using Core.Entities;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Core.Interfaces
{
    public interface ICartRepository
    {
        Task<ClientCart> GetCartAsync(string cartId);

        Task<ClientCart> UpdateCartAsync(ClientCart clientCart);

        Task<bool> DeleteCartAsync(string cartId);
    }
}
