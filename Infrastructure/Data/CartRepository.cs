using Core.Entities;
using Core.Interfaces;
using StackExchange.Redis;
using System;
using System.Threading.Tasks;

namespace Infrastructure.Data
{
    public class CartRepository : ICartRepository
    {
        private readonly IDatabase _database;

        public CartRepository(IConnectionMultiplexer redis)
        {
            _database = redis.GetDatabase();
        }
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
