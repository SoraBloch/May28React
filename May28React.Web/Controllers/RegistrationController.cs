using May28React.Data;
using May28React.Web.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace May28React.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RegistrationController : ControllerBase
    {
        private string _connectionString;

        public RegistrationController(IConfiguration configuration)
        {
            _connectionString = configuration.GetConnectionString("ConStr");
        }
        [HttpGet]
        [Route("getallcandidates")]
        public List<Candidate> GetAllCandidates()
        {
            var repo = new RegistrationRepo(_connectionString);
            return repo.GetAllCandidates();
        }
        [HttpPost]
        [Route("addcandidate")]
        public void AddCandidate(Candidate c)
        {
            c.RegistrationStatus = RegistrationStatus.Pending;
            var repo = new RegistrationRepo(_connectionString);
            repo.AddCandidate(c);
        }
        [HttpGet]
        [Route("getcandidatebyid")]
        public Candidate GetCandidateById(int id)
        {
            var repo = new RegistrationRepo(_connectionString);
            return repo.GetCandidateById(id);
        }
        [HttpGet]
        [Route("getallpendingcandidatescount")]
        public int GetAllPendingCandidatesCount()
        {
            var repo = new RegistrationRepo(_connectionString);
            return repo.GetAllPendingCandidates().Count();
        }
        [HttpGet]
        [Route("getallconfirmedcandidatescount")]
        public int GetAllCofirmedCandidatesCount()
        {
            var repo = new RegistrationRepo(_connectionString);
            return repo.GetAllConfirmedCandidates().Count();
        }
        [HttpGet]
        [Route("getallrefusedcandidatescount")]
        public int GetAllRefusedCandidatesCount()
        {
            var repo = new RegistrationRepo(_connectionString);
            return repo.GetAllRefusedCandidates().Count();
        }
        [HttpGet]
        [Route("getallpendingcandidates")]
        public List<Candidate> GetAllPendingCandidates()
        {
            var repo = new RegistrationRepo(_connectionString);
            return repo.GetAllPendingCandidates();
        }
        [HttpGet]
        [Route("getallconfirmedcandidates")]
        public List<Candidate> GetAllCofirmedCandidates()
        {
            var repo = new RegistrationRepo(_connectionString);
            return repo.GetAllConfirmedCandidates();
        }
        [HttpGet]
        [Route("getallrefusedcandidates")]
        public List<Candidate> GetAllRefusedCandidates()
        {
            var repo = new RegistrationRepo(_connectionString);
            return repo.GetAllRefusedCandidates();
        }
        [HttpGet]
        [Route("getpersonbyid")]
        public Candidate GetPersonById(int id)
        {
            var repo = new RegistrationRepo(_connectionString);
            return repo.GetCandidateById(id);
        }
        [HttpPost]
        [Route("updatepersonstatus")]
        public Candidate UpdateCandidateStatus(UpdateStatusViewModel vm)
        {
            var repo = new RegistrationRepo(_connectionString);
            return repo.UpdateCandidateStatus(vm.Id, vm.Status);
        }
    }
}
