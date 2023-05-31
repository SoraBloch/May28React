using May28React.Data;
using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;


namespace May28React.Data
{
    public class RegistrationDataContext : DbContext
    {
        private readonly string _connectionString;

        public RegistrationDataContext(string connectionString)
        {
            _connectionString = connectionString;
        }
        public DbSet<Candidate> Candidates { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(_connectionString);
        }
    }
}