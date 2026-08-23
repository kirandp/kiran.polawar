// Skill data - combined from both resumes
const skillCategories = [
  {
    title: "Languages & Frameworks",
    tags: ["Core Java 8/11/17", "Spring Boot", "Spring MVC", "Spring IOC", "Spring AOP", "Spring Cloud", "Hibernate", "JPA", "J2EE (JSP, Servlets)", "Perl", "Node.js"],
  },
  {
    title: "Web Services & APIs",
    tags: ["REST", "SOAP", "GraphQL", "JSON", "API Gateway", "Webhooks", "Wrapper APIs", "JWT"],
  },
  {
    title: "Messaging & Streaming",
    tags: ["Kafka", "RabbitMQ", "Redis (Caching)"],
  },
  {
    title: "Databases & Storage",
    tags: ["PostgreSQL", "SQL Server", "MySQL", "Cassandra", "MongoDB", "Spanner DB"],
  },
  {
    title: "Cloud & DevOps",
    tags: ["AWS", "Docker", "Kubernetes", "Jenkins", "SonarQube", "JFrog", "Ansible", "CI/CD", "Nginx", "Apache", "Tomcat"],
  },
  {
    title: "AI-Assisted Development",
    tags: ["LangChain", "LangGraph", "LlamaStack", "RAG", "RAFT", "GraphRAG", "InstructLab", "AWS AI"],
  },
  {
    title: "Frontend & UI",
    tags: ["HTML", "CSS", "jQuery", "ReactJS"],
  },
  {
    title: "Testing & Tools",
    tags: ["JUnit", "Mockito", "Git", "Maven", "IntelliJ IDEA", "Eclipse", "VS Code", "STS"],
  },
  {
    title: "Core Engineering",
    tags: ["Microservices", "Distributed Systems", "Design Patterns", "Multithreading", "DSA", "System Design", "Performance Tuning", "Security (AES-256, IAM)"],
  },
  {
    title: "Methodology & OS",
    tags: ["Agile/Scrum", "Linux", "Windows"],
  },
];

// Experience data
const experiences = [
  {
    role: "Senior Associate — Platform L2",
    company: "Publicis Sapient (Client: UnitedHealth Group — UHG)",
    period: "Nov 2024 – Present",
    points: [
      "Own end-to-end design, development, and delivery of Java microservices for the claims module.",
      "Design scalable REST and GraphQL APIs using Java 11/17, Spring Boot, Hibernate, PostgreSQL.",
      "Introduced GraphQL endpoints alongside REST to reduce over-fetching.",
      "Led migration of core services from JDK 8 to JDK 11.",
      "Applied AI-assisted development to connect workflows with code repos and CI/CD.",
    ],
  },
  {
    role: "Senior Associate — Platform L2",
    company: "Publicis Sapient (Client: Bank of America — Banking)",
    period: "Banking Domain Engagement",
    points: [
      "Delivered backend engineering for Bank of America in the banking domain, building scalable microservices on Java/Spring Boot.",
      "Developed secure, high-availability REST APIs and services aligned with regulated banking standards.",
      "Applied domain-driven design and performance tuning to support high-volume financial workloads.",
      "Leveraged CI/CD pipelines and AI-assisted development workflows to accelerate delivery.",
    ],
  },
  {
    role: "Senior Technology Lead",
    company: "TekSystems (Client: HSBC — Investment Banking)",
    period: "Feb 2024 – Nov 2024",
    points: [
      "Led backend engineering for SwapOne and Optimus trade-processing systems.",
      "Built Java microservices (Spring Boot, Hibernate, SQL Server, PostgreSQL) for financial pipelines.",
      "Applied security and data-integrity practices for regulated environments.",
    ],
  },
  {
    role: "Senior Engineering Lead",
    company: "Persistent Systems (Client: UnitedHealth Group / Optum)",
    period: "Nov 2021 – Feb 2024",
    points: [
      "Led OMMS and Integrated Eligibility microservices platforms.",
      "Designed wrapper REST APIs around OpenIAM for secure auth integration.",
      "Published open-source Spring Boot starter for AES-256 encryption via AOP.",
      "Built Kafka applications and Redis caching — cut API response time by 35%, scaled to 100K+ users.",
    ],
  },
  {
    role: "Senior Solution Developer",
    company: "Tata Technologies (Automotive / Industrial IoT)",
    period: "Aug 2014 – Nov 2021",
    points: [
      "Built CVDAP — Industrial IoT platform ingesting vehicle telemetry via messaging queues.",
      "Developed REST and SOAP web services for mobile and web clients.",
      "Delivered ALM dashboards with filterable analytics.",
      "Generated PDF/XLS reporting with Java and wkhtmltopdf.",
    ],
  },
];

// Projects data
const projects = [
  {
    title: "Request-Response Model — Spring Boot Starter",
    desc: "Open-source Spring Boot starter (Maven Central) enabling automatic request/response masking and AES-256 encryption via AOP. Published signed artifacts (JAR, sources, Javadoc) per Sonatype Central guidelines. Stack: Java 17, Spring Boot 3, AOP, Jackson, Maven, GPG.",
  },
  {
    title: "OMMS (Optum Medical Management System)",
    desc: "Microservices platform serving Providers, Doctors/Hospitals, and Government Medical Agents for UnitedHealth Group.",
  },
  {
    title: "SwapOne & Optimus (HSBC)",
    desc: "Trade-processing systems that ingest booked-trade data, batch-process it, and generate downstream reconciliation reports for high-volume financial transactions.",
  },
  {
    title: "CVDAP (Connected Vehicles Data Validation & Analysis Platform)",
    desc: "Industrial IoT application collecting telemetry from vehicle TCUs via messaging queues to drive data analytics on vehicle quality and performance.",
  },
  {
    title: "ALM (Asset Lifecycle Manager)",
    desc: "Web application providing an interface for monitoring infrastructure resources (machines, halls) for effective decision-making.",
  },
  {
    title: "Page Builder Application (HCEP)",
    desc: "Microservices web application that generates equivalent UI pages from JSON to expedite the development process.",
  },
];

// Render skills
function renderSkills() {
  const grid = document.getElementById("skillsGrid");
  skillCategories.forEach((cat) => {
    const card = document.createElement("div");
    card.className = "skill-card";
    card.innerHTML = `
      <h3>${cat.title}</h3>
      <div class="skill-tags">
        ${cat.tags.map((t) => `<span class="tag">${t}</span>`).join("")}
      </div>
    `;
    grid.appendChild(card);
  });
}

// Render experience
function renderExperience() {
  const timeline = document.getElementById("timeline");
  experiences.forEach((exp) => {
    const item = document.createElement("div");
    item.className = "timeline-item";
    item.innerHTML = `
      <div class="timeline-item__role">${exp.role}</div>
      <div class="timeline-item__company">${exp.company}</div>
      <div class="timeline-item__period">${exp.period}</div>
      <ul>${exp.points.map((p) => `<li>${p}</li>`).join("")}</ul>
    `;
    timeline.appendChild(item);
  });
}

// Render projects
function renderProjects() {
  const grid = document.getElementById("projectsGrid");
  projects.forEach((proj) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <h3>${proj.title}</h3>
      <p>${proj.desc}</p>
    `;
    grid.appendChild(card);
  });
}

// Mobile nav toggle
function initNav() {
  const toggle = document.querySelector(".nav__toggle");
  const links = document.querySelector(".nav__links");
  toggle.addEventListener("click", () => links.classList.toggle("open"));
  links.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => links.classList.remove("open"))
  );
}

// Init
document.addEventListener("DOMContentLoaded", () => {
  renderSkills();
  renderExperience();
  renderProjects();
  initNav();
});
