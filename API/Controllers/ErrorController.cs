using API.Errors;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    /// <summary>
    /// This code will generate status code default error message after adding app.UseStatusCodePagesWithReExecute("errors/{0}") in startup
    /// </summary>
    [Route("errors/{code}")]
    [ApiExplorerSettings(IgnoreApi = true)]// Adding will make api endpoints accessible via ocalhost:5001/swagger/index.html
    public class ErrorController : BaseApiController
    {
        public IActionResult Error(int code)
        {
            return new ObjectResult(new ApiResponse(code));
        }
    }
}