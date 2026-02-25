import React from "react";
import PropTypes from "prop-types";
import "../App.css";

// Użyj: <PageHeader title="Tytuł podstrony" />
export default function PageHeader({ title }) {
  return (
    <div
      className="page-header-banner-outer"
      style={{
        width: "100vw",
        position: "relative",
        left: "50%",
        right: "50%",
        marginLeft: "-50vw",
        marginRight: "-50vw",
        minHeight: 140,
        marginBottom: 32,
        zIndex: 2,
      }}
    >
      <div
        className="page-header-banner-inner d-flex align-items-center"
        style={{
          minHeight: 140,
          width: "100%",
          background: `url('/src/media/main_banner.jpg') left center/cover no-repeat`,
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: "100%",
            height: "100%",
            background: "rgba(26,20,35,0.45)",
            zIndex: 1,
          }}
        />
        <div
          style={{
            position: "relative",
            zIndex: 2,
            width: "100%",
            maxWidth: 1100,
            margin: "0 auto",
            paddingLeft: 16,
            display: "flex",
            alignItems: "center",
            height: "100%",
          }}
        >
          <h1
            style={{
              color: 'var(--text-primary)',
              fontWeight: 800,
              fontSize: '2.1rem',
              margin: 0,
              textShadow: '0 2px 8px rgba(26,20,35,0.12)',
            }}
          >
            {title}
          </h1>
        </div>
      </div>
    </div>
  );
}

PageHeader.propTypes = {
  title: PropTypes.string.isRequired,
};
