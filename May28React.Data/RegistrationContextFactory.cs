using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;

namespace May28React.Data
{
    public partial class RegistrationContextFactory : IDesignTimeDbContextFactory<RegistrationDataContext>
    {
        public RegistrationDataContext CreateDbContext(string[] args)
        {
            var config = new ConfigurationBuilder()
                .SetBasePath(Path.Combine(Directory.GetCurrentDirectory(), $"..{Path.DirectorySeparatorChar}May28React.Web"))
                .AddJsonFile("appsettings.json")
                .AddJsonFile("appsettings.local.json", optional: true, reloadOnChange: true).Build();

            return new RegistrationDataContext(config.GetConnectionString("ConStr"));
        }
    }
}