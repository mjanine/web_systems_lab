import React, { useState } from 'react';
import Header from './components/Header';
import About from './components/About';
import ProjectCard from './components/ProjectCard';

export default function App() {
  const [showContact, setShowContact] = useState(false);

  const projects = [
    {
      id: 1,
      title: 'PhytoSentry',
      description: 'Private plant and crop monitoring system designed for early issue detection and operational awareness.',
      techStack: ['TypeScript'],
    },
    {
      id: 2,
      title: 'Sambast',
      description: 'Pet food and poultry shop ordering solution with workflow-friendly management routines.',
      techStack: ['Python'],
    },
    {
      id: 3,
      title: 'hrers-project',
      description: 'Human resources and employee management application focused on workflow optimization.',
      techStack: ['CSS', 'HTML', 'JavaScript'],
    },
    {
      id: 4,
      title: 'DataViz',
      description: 'Finals project centered on data visualization and exploratory data analysis.',
      techStack: ['Jupyter Notebook', 'Python'],
    },
    {
      id: 5,
      title: 'Employee-Record-System (Dev A)',
      description: 'HCI project emphasizing front-end user experience and interface layout.',
      techStack: ['CSS', 'HTML', 'JavaScript'],
    },
    {
      id: 6,
      title: 'Association-Rule-Mining',
      description: 'Data science implementation applying association rule mining on structured CSV datasets.',
      techStack: ['Jupyter Notebook', 'Python'],
    },
  ];

  const highlights = [
    { label: 'Focus', value: 'Backend systems' },
    { label: 'Strength', value: 'Data-driven design' },
    { label: 'Approach', value: 'Scalable and clean' },
  ];

  return (
    <div style={styles.pageWrapper}>
      <div style={styles.container}>
        <Header
          name="Mariella Janine A. Sola"
          title="Backend Developer | Future Data Scientist"
          summary="I build dependable digital solutions with a strong interest in backend architecture, data-driven insights, and user-centered product thinking."
        />

        <About />

        <section style={styles.heroCard}>
          <div style={styles.heroContent}>
            <p style={styles.eyebrow}>Portfolio Overview</p>
            <h2 style={styles.heroTitle}>Creating thoughtful software that bridges logic, data, and user experience.</h2>
            <p style={styles.heroDescription}>
              I enjoy turning ideas into reliable applications, whether it is a backend workflow, an analytics project, or a polished interface.
            </p>
            <button
              style={styles.primaryButton}
              onClick={() => setShowContact((prev) => !prev)}
            >
              {showContact ? 'Hide Contact Info' : 'Get In Touch'}
            </button>
          </div>

          <div style={styles.statsGrid}>
            {highlights.map((item) => (
              <div key={item.label} style={styles.statCard}>
                <span style={styles.statLabel}>{item.label}</span>
                <strong style={styles.statValue}>{item.value}</strong>
              </div>
            ))}
          </div>
        </section>

        <main>
          <div style={styles.sectionHeader}>
            <div>
              <p style={styles.sectionEyebrow}>Selected Work</p>
              <h2 style={styles.sectionTitle}>Featured Projects</h2>
            </div>
            <span style={styles.projectCount}>{projects.length} Projects</span>
          </div>

          <div style={styles.grid}>
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                techStack={project.techStack}
              />
            ))}
          </div>
        </main>

        <footer style={styles.contactSection}>
          {showContact && (
            <div style={styles.contactCard}>
              <div style={styles.contactItem}>
                <span style={styles.contactLabel}>Email</span>
                <a href="mailto:janinemariella03@gmail.com" style={styles.contactLink}>
                  janinemariella03@gmail.com
                </a>
              </div>
              <div style={styles.contactItem}>
                <span style={styles.contactLabel}>LinkedIn</span>
                <a href="https://www.linkedin.com/in/janine-sola/" target="_blank" rel="noreferrer" style={styles.contactLink}>
                  linkedin.com/in/janine-sola
                </a>
              </div>
              <div style={styles.contactItem}>
                <span style={styles.contactLabel}>GitHub</span>
                <a href="https://github.com/mjanine" target="_blank" rel="noreferrer" style={styles.contactLink}>
                  github.com/mjanine
                </a>
              </div>
            </div>
          )}
        </footer>
      </div>
    </div>
  );
}

const styles = {
  pageWrapper: {
    minHeight: '100vh',
    padding: '2rem 1rem',
    boxSizing: 'border-box',
    background: 'linear-gradient(135deg, #f8ece8 0%, #f4e6ed 100%)',
  },
  container: {
    maxWidth: '1040px',
    margin: '0 auto',
    padding: '0 1rem',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    color: '#1f2937',
  },
  heroCard: {
    display: 'grid',
    gridTemplateColumns: '1.8fr 1fr',
    gap: '1.5rem',
    background: 'rgba(255, 255, 255, 0.8)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(17, 24, 39, 0.08)',
    borderRadius: '24px',
    padding: '2rem',
    boxShadow: '0 20px 45px rgba(15, 23, 42, 0.08)',
    marginBottom: '2rem',
  },
  heroContent: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  eyebrow: {
    margin: '0 0 0.5rem 0',
    fontSize: '0.8rem',
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: '0.18em',
    color: '#7c3aed',
  },
  heroTitle: {
    margin: '0 0 0.75rem 0',
    fontSize: '1.8rem',
    fontWeight: '700',
    lineHeight: 1.25,
    color: '#090D16',
  },
  heroDescription: {
    margin: '0 0 1.25rem 0',
    fontSize: '1rem',
    lineHeight: 1.7,
    color: '#4b5563',
    maxWidth: '640px',
  },
  primaryButton: {
    alignSelf: 'flex-start',
    background: 'linear-gradient(135deg, #090D16 0%, #2D3748 100%)',
    color: '#FFFFFF',
    border: 'none',
    padding: '0.8rem 1.3rem',
    borderRadius: '999px',
    cursor: 'pointer',
    fontSize: '0.95rem',
    fontWeight: '600',
    boxShadow: '0 10px 20px rgba(17, 24, 39, 0.16)',
  },
  statsGrid: {
    display: 'grid',
    gap: '0.75rem',
  },
  statCard: {
    padding: '1rem 1.1rem',
    borderRadius: '16px',
    background: 'linear-gradient(135deg, #f9fafb 0%, #f3f4f6 100%)',
    border: '1px solid #e5e7eb',
  },
  statLabel: {
    display: 'block',
    fontSize: '0.78rem',
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: '0.12em',
    color: '#6b7280',
    marginBottom: '0.4rem',
  },
  statValue: {
    fontSize: '1rem',
    color: '#090D16',
  },
  sectionHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '1.25rem',
    gap: '1rem',
  },
  sectionEyebrow: {
    margin: '0 0 0.35rem 0',
    fontSize: '0.75rem',
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: '0.14em',
    color: '#7c3aed',
  },
  sectionTitle: {
    margin: 0,
    fontSize: '1.35rem',
    fontWeight: '700',
    color: '#090D16',
    letterSpacing: '-0.01em',
  },
  projectCount: {
    fontSize: '0.85rem',
    color: '#4b5563',
    backgroundColor: '#f3f4f6',
    padding: '0.35rem 0.7rem',
    borderRadius: '999px',
    fontWeight: '600',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
    gap: '1.2rem',
    marginBottom: '2.5rem',
  },
};