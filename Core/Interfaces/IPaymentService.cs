using System.Threading.Tasks;
using Core.Entities;
using Core.Entities.OrderAggregate;

namespace Core.Interfaces
{
    public interface IPaymentService
    {
         Task<ClientCart> CreateOrUpdatePaymentIntent(string cartId);
         Task<Order> UpdateOrderPaymentSucceeded(string paymentIntentId);
         Task<Order> UpdateOrderPaymentFailed(string paymentIntentId);
    }
}