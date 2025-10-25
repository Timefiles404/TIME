import React from 'react';
import BlurText from './BlurText';

const overlayStyle = {
  position: 'absolute',
  inset: 0,
  pointerEvents: 'none',
};

const baseItemStyle = {
  position: 'relative',
  background: 'linear-gradient(180deg, #0a0a0a 0%, #141414 100%)',
  border: '1px solid #2a2a2a',
  borderRadius: '16px',
  padding: '16px',
  overflow: 'hidden',
  boxShadow: '0 10px 30px rgba(0,0,0,0.35)',
  transition: 'transform 300ms ease, box-shadow 300ms ease, border-color 300ms ease',
};

const baseTitleStyle = {
  color: '#aaaaaa',
  fontSize: '14px',
  fontWeight: 600,
  marginBottom: '6px',
};

const baseTextStyle = {
  color: '#cccccc',
  fontSize: '14px',
  lineHeight: 1.7,
};

const baseValueStyle = {
  color: '#ffffff',
  fontSize: '18px',
  fontWeight: 700,
};

function GaussianBlurLayer({ opacity = 0.08 }) {
  return (
    <div style={overlayStyle}>
      <div
        style={{
          position: 'absolute',
          top: '-20%',
          left: '-10%',
          width: '260px',
          height: '260px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 60%)',
          filter: 'blur(40px)',
          opacity,
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '-25%',
          right: '-5%',
          width: '320px',
          height: '320px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 60%)',
          filter: 'blur(55px)',
          opacity: opacity * 1.2,
        }}
      />
    </div>
  );
}

export function MagicBentoItem({ title, value, description, footer, style, titleStyle, valueStyle, descriptionStyle, footerStyle }) {
  return (
    <div
      className="magic-bento-item"
      style={{ ...baseItemStyle, ...(style || {}) }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-6px)';
        e.currentTarget.style.boxShadow = '0 16px 40px rgba(0,0,0,0.45)';
        e.currentTarget.style.borderColor = '#3a3a3a';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.35)';
        e.currentTarget.style.borderColor = '#2a2a2a';
      }}
    >
      <GaussianBlurLayer opacity={0.08} />
      {title ? (
        <div style={{ ...baseTitleStyle, ...(titleStyle || {}) }}>
          <BlurText text={title} delay={120} animateBy="letters" direction="top" />
        </div>
      ) : null}
      {value ? (
        <div style={{ ...baseValueStyle, ...(valueStyle || {}) }}>
          <BlurText text={value} delay={220} animateBy="letters" direction="top" />
        </div>
      ) : null}
      {description ? (
        <div style={{ ...baseTextStyle, marginTop: value ? '8px' : '0', ...(descriptionStyle || {}) }}>
          <BlurText text={description} delay={260} animateBy="letters" direction="top" />
        </div>
      ) : null}
      {footer ? (
        <div style={{ ...baseTextStyle, marginTop: '12px', opacity: 0.85, ...(footerStyle || {}) }}>{footer}</div>
      ) : null}
    </div>
  );
}

export default function MagicBentoGrid({ items = [], columns = 6, rowHeight = 90, gap = 20, style }) {
  return (
    <div
      className="magic-bento-grid"
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
        gridAutoRows: `${rowHeight}px`,
        gridAutoFlow: 'dense',
        gap: `${gap}px`,
        ...(style || {}),
      }}
    >
      {items.map((item, idx) => (
        <MagicBentoItem
          key={idx}
          {...item}
          style={{
            gridColumn: `span ${item.colSpan || 1}`,
            gridRow: `span ${item.rowSpan || 1}`,
            ...(item.style || {}),
          }}
        />
      ))}
    </div>
  );
}