import React from "react";
import "../App.css";
import "../index.css";
import "../authorities.css";

export default function HoprNewsPage() {
  return (
    <div className="authorities-container" style={{maxWidth: 900, margin: '0 auto', paddingBottom: 48}}>
      <h1 style={{marginBottom: 18}}>Aktualności HOPR</h1>
      <div style={{fontSize: '1.08rem', marginBottom: 24, lineHeight: 1.7}}>
        Zapraszamy do odwiedzenia naszego fanpage'a na Facebooku.
      </div>
      <div style={{display: 'flex', justifyContent: 'center', marginTop: 24}}>
        <iframe
          src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fhoprpolska&tabs=timeline&width=3500&height=800&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=903400456679253"
          width="500"
          height="800"
          style={{border: 'none', overflow: 'hidden', borderRadius: 32, background: '#dbe7d0'}}
          scrolling="no"
          frameBorder="0"
          allowFullScreen={true}
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          title="Facebook feed HOPR"
        ></iframe>
      </div>
    </div>
  );
}
