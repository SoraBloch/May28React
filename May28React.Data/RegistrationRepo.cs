namespace May28React.Data
{
    public class RegistrationRepo
    {
        private readonly string _connectionString;

        public RegistrationRepo(string connectionString)
        {
            _connectionString = connectionString;
        }

        public List<Candidate> GetAllCandidates()
        {
            using var context = new RegistrationDataContext(_connectionString);
            return context.Candidates.ToList();
        }
        public void AddCandidate(Candidate candidate)
        {
            using var context = new RegistrationDataContext(_connectionString);
            context.Candidates.Add(candidate);
            context.SaveChanges();
        }
        public Candidate GetCandidateById(int id)
        {
            using var context = new RegistrationDataContext(_connectionString);
            return context.Candidates.FirstOrDefault(c => c.Id == id);
        }
        public List<Candidate> GetAllPendingCandidates()
        {
            using var context = new RegistrationDataContext(_connectionString);
            return context.Candidates.Where(c => c.RegistrationStatus == RegistrationStatus.Pending).ToList();
        }
        public List<Candidate> GetAllConfirmedCandidates()
        {
            using var context = new RegistrationDataContext(_connectionString);
            return context.Candidates.Where(c => c.RegistrationStatus == RegistrationStatus.Confirmed).ToList();
        }
        public List<Candidate> GetAllRefusedCandidates()
        {
            using var context = new RegistrationDataContext(_connectionString);
            return context.Candidates.Where(c => c.RegistrationStatus == RegistrationStatus.Refused).ToList();
        }
        public Candidate UpdateCandidateStatus(int id, RegistrationStatus status)
        {
            using var context = new RegistrationDataContext(_connectionString);
            var candidate = context.Candidates.FirstOrDefault(c => c.Id == id);
            candidate.RegistrationStatus = status;
            context.SaveChanges();
            return candidate;
        }
    }
}