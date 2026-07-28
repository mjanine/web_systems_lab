import React from 'react';

export default function ProjectCard({ title, description, techStack }) {
  return (
    <div style={styles.card}>
      <div style={styles.cardAccent} />
      <div style={styles.cardHeader}>
        <h3 style={styles.title}>{title}</h3>
      </div>
      <p style={styles.description}>{description}</p>
      <div style={styles.techList}>
        {techStack.map((tech, index) => (
          <span key={index} style={styles.badge}>
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}

const styles = {
  card: {
    position: 'relative',
    backgroundColor: '#FFFFFF',
    border: '1px solid #E5E7EB',
    borderRadius: '16px',
    padding: '1.35rem 1.25rem 1.2rem',
    boxShadow: '0 10px 24px rgba(15, 23, 42, 0.05)',
    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    minHeight: '190px',
  },
  cardAccent: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '4px',
    background: 'linear-gradient(90deg, #7c3aed 0%, #ec4899 100%)',
    borderTopLeftRadius: '16px',
    borderTopRightRadius: '16px',
  },
  cardHeader: {
    marginTop: '0.4rem',
    marginBottom: '0.6rem',
  },
  title: {
    margin: 0,
    fontSize: '1.05rem',
    fontWeight: '700',
    color: '#111827',
  },
  description: {
    margin: '0 0 1rem 0',
    fontSize: '0.92rem',
    color: '#4B5563',
    lineHeight: '1.6',
  },
  techList: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.5rem',
  },
  badge: {
    backgroundColor: '#F9FAFB',
    color: '#374151',
    border: '1px solid #E5E7EB',
    padding: '0.25rem 0.65rem',
    borderRadius: '999px',
    fontSize: '0.74rem',
    fontWeight: '600',
  },
};