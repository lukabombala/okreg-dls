import React from "react";
import "../App.css";
import "../index.css";
import "../authorities.css";

export default function ScoutMethodPage() {
  return (
    <div className="authorities-container" style={{maxWidth: 900, margin: '0 auto', paddingBottom: 48}}>
      <h2 style={{fontSize: '1.15rem', margin: '32px 0 10px 0', color: 'var(--primary)'}}>Jak działamy w Okręgu Dolnośląskim ZHR</h2>
      <div style={{marginBottom: 18, lineHeight: 1.7}}>
        Działania gromad i drużyn Okręgu Dolnośląskiego ZHR – zarówno w pracy śródrocznej, jak i podczas kolonii, obozów oraz zimowisk – opierają się na metodzie harcerskiej. To sprawdzony system wychowawczy, który wyrasta z naturalnych potrzeb młodego człowieka: chęci przeżycia przygody, bycia częścią grupy, szukania akceptacji, sprawdzania własnych możliwości i uczenia się odpowiedzialności.
      </div>
      <h2 style={{fontSize: '1.15rem', margin: '32px 0 10px 0', color: 'var(--primary)'}}>Metoda harcerska w praktyce</h2>
      <div style={{marginBottom: 18, lineHeight: 1.7}}>
        Metoda harcerska działa nie „na zasadzie wykładów”, ale przez doświadczenie. W praktyce szczególnie ważne są:
        <ul style={{marginLeft: 18, marginTop: 8, marginBottom: 8, lineHeight: 1.7}}>
          <li>naturalność – wychowanie poprzez działanie, przykład i codzienną pracę.</li>
          <li>małe grupy rówieśnicze – praca w stałych zespołach (szóstkach i zastępach), które uczą współpracy i budują relacje.</li>
          <li>stopnie i sprawności – motywacja do pracy nad sobą i podejmowania wyzwań.</li>
          <li>obrzędowość i symbolika – klimat wspólnoty i opowieść, które niosą wartości wychowawcze.</li>
          <li>służba i odpowiedzialność – uczenie się działania dla dobra innych i dobra wspólnego.</li>
        </ul>
        W ZHR gromady i drużyny są niekoedukacyjne.
      </div>
      <h2 style={{fontSize: '1.15rem', margin: '32px 0 10px 0', color: 'var(--primary)'}}>Praca śródroczna</h2>
      <div style={{marginBottom: 18, lineHeight: 1.7}}>
        Podstawą jest całoroczna, regularna praca wychowawcza: zbiórki, działania w małych grupach, wyjścia w teren, gry, warsztaty oraz wyjazdy (biwaki i zimowiska). Dzięki temu letni obóz czy kolonia nie są „oderwanym wydarzeniem”, ale naturalnym zwieńczeniem pracy wykonywanej przez cały rok.
      </div>
      <div style={{display: 'flex', gap: 32, flexWrap: 'wrap', marginBottom: 18}}>
        <div style={{flex: '1 1 320px', minWidth: 220}}>
          <b>Gromady zuchowe (najmłodsi)</b>
          <div style={{lineHeight: 1.7}}>
            Gromady zuchowe skupiają najmłodszych (7-11 lat). W ciągu roku odbywają się cotygodniowe zbiórki prowadzone przez wodza gromady (instruktora) i kadrę. Zuchy działają w małych grupach – „szóstkach” – co porządkuje pracę i uczy współpracy.
            W trakcie roku zuchy zdobywają sprawności i gwiazdki (odpowiednik stopni), wyjeżdżają na kilkudniowe biwaki i zimowiska, a podsumowaniem pracy jest zwykle kolonia zuchowa (najczęściej 10–14 dni) oparta na jednej spójnej fabule, z dużą ilością zajęć na świeżym powietrzu.
          </div>
        </div>
        <div style={{flex: '1 1 320px', minWidth: 220}}>
          <b>Drużyny harcerskie (harcerki i harcerze)</b>
          <div style={{lineHeight: 1.7}}>
            W drużynie harcerskiej centrum pracy stanowi zastęp – niewielka grupa prowadzona przez zastępowego (rówieśnika lub nieco starszego). Zbiórki odbywają się regularnie, często w terenie (las, okolica), a także w harcówkach i przestrzeni miejskiej. Zastępowi spotykają się dodatkowo na zbiórkach prowadzonych przez drużynowego (instruktora, osobę dorosłą), który czuwa nad całością pracy drużyny.
            W ciągu roku odbywają się biwaki i zimowiska, a kulminacją jest obóz stacjonarny pod namiotami, w którym program wypełniają gry terenowe, ogniska, zajęcia warsztatowe, wycieczki, zawiady i różne formy turystyki. Ważnym elementem jest też współtworzenie obozu: dyżury, drobne prace na rzecz wspólnoty i uczenie się odpowiedzialności.
          </div>
        </div>
        <div style={{flex: '1 1 320px', minWidth: 220}}>
          <b>Wędrownictwo (starsza młodzież)</b>
          <div style={{lineHeight: 1.7}}>
            Wędrownictwo to etap, w którym młodzież uczy się jeszcze większej samodzielności: planuje, przygotowuje i realizuje ambitne działania oraz projekty. Wypoczynek ma często formę obozów wędrownych/wypraw, gdzie kluczowe są współudział i współodpowiedzialność uczestników (plan, logistyka, trasa, zadania).
          </div>
        </div>
      </div>
      <h2 style={{fontSize: '1.15rem', margin: '32px 0 10px 0', color: 'var(--primary)'}}>Wypoczynek letni i zimowy</h2>
      <div style={{marginBottom: 18, lineHeight: 1.7}}>
        Latem organizowane są m.in. kolonie zuchowe, obozy stacjonarne pod namiotami, obozy wędrowne (czasem także poza granicami Polski). Zimą odbywają się zimowiska we wszystkich grupach wiekowych – zazwyczaj stacjonarne, czasem także w formie wędrownej; program jest dostosowany do wieku i potrzeb uczestników.
      </div>
      <h2 style={{fontSize: '1.15rem', margin: '32px 0 10px 0', color: 'var(--primary)'}}>Kadra i odpowiedzialność na wyjazdach</h2>
      <div style={{marginBottom: 18, lineHeight: 1.7}}>
        Każda forma wypoczynku musi prowadzić instruktor/instruktorka posiadający państwowe uprawnienia kierownika wypoczynku (komendant/komendantka). Za poszczególne grupy odpowiada wychowawca – najczęściej drużynowy lub wódz, który zna uczestników z pracy w ciągu roku i jest pierwszą osobą do kontaktu w sprawach dotyczących organizacji oraz bezpieczeństwa dziecka.
        W zależności od charakteru wyjazdu w kadrze mogą też być osoby odpowiedzialne za program, logistykę, zdrowie, wyżywienie, transport itp.
      </div>
    </div>
  );
}
