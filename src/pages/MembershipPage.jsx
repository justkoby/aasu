import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation } from 'lucide-react';

const MembershipPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeRegion, setActiveRegion] = useState('ALL');

  const flagEmojis = {
    Algeria: "🇩🇿", Egypt: "🇪🇬", Libya: "🇱🇾", Mauritania: "🇲🇷", Morocco: "🇲🇦", Tunisia: "🇹🇳",
    Benin: "🇧🇯", "Burkina Faso": "🇧🇫", "Cape Verde": "🇨🇻", "Côte d'Ivoire": "🇨🇮", Gambia: "🇬🇲", 
    Ghana: "🇬🇭", Guinea: "🇬🇳", "Guinea-Bissau": "🇬🇼", Liberia: "🇱🇷", Mali: "🇲🇱", Niger: "🇳🇪", 
    Nigeria: "🇳🇬", Senegal: "🇸🇳", "Sierra Leone": "🇸🇱", Togo: "🇹🇬",
    Angola: "🇦🇴", Botswana: "🇧🇼", Eswatini: "🇸🇿", Lesotho: "🇱🇸", Malawi: "🇲🇼", Mozambique: "🇲🇿", 
    Namibia: "🇳🇦", "South Africa": "🇿🇦", Zambia: "🇿🇲", Zimbabwe: "🇿🇼",
    Cameroon: "🇨🇲", "Central African Republic": "🇨🇫", Chad: "🇹🇩", "Republic of Congo": "🇨🇬", 
    "DR Congo": "🇨🇩", "Equatorial Guinea": "🇬🇶", Gabon: "🇬🇦", "São Tomé and Príncipe": "🇸🇹",
    Burundi: "🇧🇮", Comoros: "🇰🇲", Djibouti: "🇩🇯", Eritrea: "🇪🇷", Ethiopia: "🇪🇹", Kenya: "🇰🇪", 
    Madagascar: "🇲🇬", Mauritius: "🇲🇺", Rwanda: "🇷🇼", Seychelles: "🇸🇨", Somalia: "🇸🇴", 
    Sudan: "🇸🇩", "South Sudan": "🇸🇸", Tanzania: "🇹🇿"
  };

  const members = [
    // NORTH AFRICA
    { region: "NORTH AFRICA", org: "Union Nationale Des Etudiant(E)S Alegria (NES)", country: "Algeria", type: "Full Member" },
    { region: "NORTH AFRICA", org: "Students Representative Council of Alexandria University", country: "Egypt", type: "Associate Member" },
    { region: "NORTH AFRICA", org: "Students Representative Council of Cairo University", country: "Egypt", type: "Associate Member" },
    { region: "NORTH AFRICA", org: "American University in Cairo (AUC) Student Government", country: "Egypt", type: "Associate Member" },
    { region: "NORTH AFRICA", org: "General Union of Libya Students (GULS)", country: "Libya", type: "Full Member" },
    { region: "NORTH AFRICA", org: "Union Nationale des Etudiant Mauritaniens", country: "Mauritania", type: "Full Member" },
    { region: "NORTH AFRICA", org: "Students' Representative Council, Université De Nouakchott", country: "Mauritania", type: "Associate Member" },
    { region: "NORTH AFRICA", org: "Union Nationale des Etudiants Marocains", country: "Morocco", type: "Full Member" },
    { region: "NORTH AFRICA", org: "Université Abdelmalek Essaâdi Student Union", country: "Morocco", type: "Associate Member" },
    { region: "NORTH AFRICA", org: "Union Général Tunisienne Des Étudiants (UGTE)", country: "Tunisia", type: "Full Member" },
    
    // WEST AFRICA
    { region: "WEST AFRICA", org: "La Fédération Nationale des Étudiants du Benin (FNEB)", country: "Benin", type: "Full Member" },
    { region: "WEST AFRICA", org: "Nationale des Étudiants du Bénin (UNEB)", country: "Benin", type: "Associate Member" },
    { region: "WEST AFRICA", org: "Union Nationale des Scolaires et Étudiants du Bénin (UNSEB)", country: "Benin", type: "Associate Member" },
    { region: "WEST AFRICA", org: "La Fédération Estudiantine Et Scolaire Pour L'Intégrité au Burkina Faso (FESCIBF)", country: "Burkina Faso", type: "Full Member" },
    { region: "WEST AFRICA", org: "Federation Nationale des Eleves et Etudiants Burkinabe (FNEEB)", country: "Burkina Faso", type: "Associate Member" },
    { region: "WEST AFRICA", org: "Federação Nacional de Estudantes e Desporto Universitário", country: "Cape Verde", type: "Full Member" },
    { region: "WEST AFRICA", org: "la Fédération Estudiantine et Scolaire de Côte d'Ivoire (FESCI)", country: "Côte d'Ivoire", type: "Full Member" },
    { region: "WEST AFRICA", org: "Counsell Nationnal des Delegues de Côte-D'Ivoire", country: "Côte d'Ivoire", type: "Associate Member" },
    { region: "WEST AFRICA", org: "National Union of Gambia Students (NUGS)", country: "Gambia", type: "Full Member" },
    { region: "WEST AFRICA", org: "National Union of Ghana Students (NUGS)", country: "Ghana", type: "Full Member" },
    { region: "WEST AFRICA", org: "Graduate Students Association of Ghana (GRASAG)", country: "Ghana", type: "Associate Member" },
    { region: "WEST AFRICA", org: "Ghana National Union of Technical Students (GNUTS)", country: "Ghana", type: "Associate Member" },
    { region: "WEST AFRICA", org: "Ghana Union of Professional Students (GUPS)", country: "Ghana", type: "Associate Member" },
    { region: "WEST AFRICA", org: "University Students Association of Ghana (USAG)", country: "Ghana", type: "Associate Member" },
    { region: "WEST AFRICA", org: "Association Scolaire et Estudiantine de Guinee (A-SEG)", country: "Guinea", type: "Full Member" },
    { region: "WEST AFRICA", org: "Guinean Students Empowerment Association (GUISEA)", country: "Guinea", type: "Associate Member" },
    { region: "WEST AFRICA", org: "Plataforma Nacional das Associações Acadêmicas da Universidade de Guiné-Bissau (PNAAEMS-GB)", country: "Guinea-Bissau", type: "Full Member" },
    { region: "WEST AFRICA", org: "National Confederation of Student Associations of Guinea-Bissau-CONAEGUIB", country: "Guinea-Bissau", type: "Associate Member" },
    { region: "WEST AFRICA", org: "Liberia National Students' Union (LINSU)", country: "Liberia", type: "Full Member" },
    { region: "WEST AFRICA", org: "Association Des Élèves Et Étudiants Du Mali (AEEM)", country: "Mali", type: "Full Member" },
    { region: "WEST AFRICA", org: "Union Des Scolaires Niger", country: "Niger", type: "Full Member" },
    { region: "WEST AFRICA", org: "National Association of Nigerian Students (NANS)", country: "Nigeria", type: "Full Member" },
    { region: "WEST AFRICA", org: "Postgraduate Students Association of Nigeria (PSAN)", country: "Nigeria", type: "Associate Member" },
    { region: "WEST AFRICA", org: "Students' Representative Council, Cheikh Anta Diop University", country: "Senegal", type: "Associate Member" },
    { region: "WEST AFRICA", org: "National Union of Sierra Leone Students (NUSS)", country: "Sierra Leone", type: "Full Member" },
    { region: "WEST AFRICA", org: "Union National des Étudiants du Togo (UNETO)", country: "Togo", type: "Full Member" },

    // SOUTHERN AFRICA
    { region: "SOUTHERN AFRICA", org: "Union Nationale des etudiants d'Angola", country: "Angola", type: "Full Member" },
    { region: "SOUTHERN AFRICA", org: "Student Association of Universidade Agostinho Neto (UAN)", country: "Angola", type: "Associate Member" },
    { region: "SOUTHERN AFRICA", org: "Associação dos Estudantes das Universidades Privadas de Angola (AEUPA)", country: "Angola", type: "Associate Member" },
    { region: "SOUTHERN AFRICA", org: "Botswana United Students Association (BUSA)", country: "Botswana", type: "Full Member" },
    { region: "SOUTHERN AFRICA", org: "Swaziland National Union of Students (SNUS)", country: "Eswatini", type: "Full Member" },
    { region: "SOUTHERN AFRICA", org: "United Lesotho Students Association (ULSA)", country: "Lesotho", type: "Full Member" },
    { region: "SOUTHERN AFRICA", org: "Malawi National Students Union (MANASU)", country: "Malawi", type: "Full Member" },
    { region: "SOUTHERN AFRICA", org: "União dos Estudantes Moçambicanos", country: "Mozambique", type: "Full Member" },
    { region: "SOUTHERN AFRICA", org: "Association of University Finalist Students of Mozambique (AEFUM)", country: "Mozambique", type: "Associate Member" },
    { region: "SOUTHERN AFRICA", org: "Associação de Estudantes da Universidade Eduardo Mondlane - AEU-UEM", country: "Mozambique", type: "Associate Member" },
    { region: "SOUTHERN AFRICA", org: "Namibian National Students Organisation (NANSO)", country: "Namibia", type: "Full Member" },
    { region: "SOUTHERN AFRICA", org: "South African Union of Students (SAUS)", country: "South Africa", type: "Associate Member" },
    { region: "SOUTHERN AFRICA", org: "South African Students Congress (SASCO)", country: "South Africa", type: "Full Member" },
    { region: "SOUTHERN AFRICA", org: "South African Technical Vocational Education and Training Student Association (SATVETSA)", country: "South Africa", type: "Associate Member" },
    { region: "SOUTHERN AFRICA", org: "Zambia National Students Union (ZANASU)", country: "Zambia", type: "Full Member" },
    { region: "SOUTHERN AFRICA", org: "Zimbabwe National Students Union (ZINASU)", country: "Zimbabwe", type: "Full Member" },
    { region: "SOUTHERN AFRICA", org: "Zimbabwe Congress of Student's Union (ZICOSU)", country: "Zimbabwe", type: "Associate Member" },

    // CENTRAL AFRICA
    { region: "CENTRAL AFRICA", org: "SOS Éducation Promote", country: "Cameroon", type: "Associate Member" },
    { region: "CENTRAL AFRICA", org: "Association Des Etudiants De L'universite De Yaounde", country: "Cameroon", type: "Associate Member" },
    { region: "CENTRAL AFRICA", org: "International Relations Institute of Cameroon (IRIC)", country: "Cameroon", type: "Associate Member" },
    { region: "CENTRAL AFRICA", org: "Association Nationale Des Etudiants De Centrafrique", country: "Central African Republic", type: "Full Member" },
    { region: "CENTRAL AFRICA", org: "Union Nationale des Étudiants Tchadiens (UNET)", country: "Chad", type: "Full Member" },
    { region: "CENTRAL AFRICA", org: "Association des Etudiants de la Faculte des Sciences (AEFST)", country: "Republic of Congo", type: "Associate Member" },
    { region: "CENTRAL AFRICA", org: "Mouvement Des Élèves Et Étudiants Du Congo (MEEC)", country: "Republic of Congo", type: "Associate Member" },
    { region: "CENTRAL AFRICA", org: "Representation des Etudiants du Congo (R.E.C/RDC)", country: "DR Congo", type: "Full Member" },
    { region: "CENTRAL AFRICA", org: "La Universidad Nacional De Guinea Ecuatorial", country: "Equatorial Guinea", type: "Full Member" },
    { region: "CENTRAL AFRICA", org: "Union Nationale des Etudiants du Gabon (UNEG)", country: "Gabon", type: "Full Member" },
    { region: "CENTRAL AFRICA", org: "Federação Nacional das Associações Académicas da Universidade de São Tomé e Príncipe", country: "São Tomé and Príncipe", type: "Full Member" },
    { region: "CENTRAL AFRICA", org: "Universidade Lusiada De São Tome E Principe", country: "São Tomé and Príncipe", type: "Associate Member" },

    // EAST AFRICA
    { region: "EAST AFRICA", org: "Burundi National Students Union (BNSU)", country: "Burundi", type: "Full Member" },
    { region: "EAST AFRICA", org: "Union Nationale De Jeunesse Et Des Etudiants des Comoros", country: "Comoros", type: "Full Member" },
    { region: "EAST AFRICA", org: "Union Nationale De Jeunesse Et Des Etudiants Des Djiboui", country: "Djibouti", type: "Full Member" },
    { region: "EAST AFRICA", org: "Association des Jeunes Universitaires et Diplômés", country: "Djibouti", type: "Associate Member" },
    { region: "EAST AFRICA", org: "Association des Anciens Stagiaires de la JICA (ASS-JICA Djibouti)", country: "Djibouti", type: "Consultative Member" },
    { region: "EAST AFRICA", org: "National Union of Eritrean Youth and Students", country: "Eritrea", type: "Full Member" },
    { region: "EAST AFRICA", org: "Ethiopian Higher Education Institutes Students Union (EHEISU)", country: "Ethiopia", type: "Full Member" },
    { region: "EAST AFRICA", org: "Kenya University Students Organisation (KUSO)", country: "Kenya", type: "Full Member" },
    { region: "EAST AFRICA", org: "University of Nairobi Students Association (UNSA)", country: "Kenya", type: "Associate Member" },
    { region: "EAST AFRICA", org: "Kenya Private Universities Association", country: "Kenya", type: "Associate Member" },
    { region: "EAST AFRICA", org: "Kenyatta University Students Association", country: "Kenya", type: "Associate Member" },
    { region: "EAST AFRICA", org: "Students' Representative Council, Université d'Antananarivo", country: "Madagascar", type: "Associate Member" },
    { region: "EAST AFRICA", org: "Comité Démocratique Des Jeunes Et Des Etudiants De Madagascar", country: "Madagascar", type: "Full Member" },
    { region: "EAST AFRICA", org: "Council of Students & Youth Movement of Mauritius (COSYM)", country: "Mauritius", type: "Full Member" },
    { region: "EAST AFRICA", org: "Rwanda National Students Association", country: "Rwanda", type: "Full Member" },
    { region: "EAST AFRICA", org: "Students' Representative Council, University of Seychelles", country: "Seychelles", type: "Associate Member" },
    { region: "EAST AFRICA", org: "Somalia Higher Education Students Union", country: "Somalia", type: "Full Member" },
    { region: "EAST AFRICA", org: "Somali Public Health Students Association (SOPHSA)", country: "Somalia", type: "Associate Member" },
    { region: "EAST AFRICA", org: "Union Students Universities of Somalia (USUSOM)", country: "Somalia", type: "Associate Member" },
    { region: "EAST AFRICA", org: "General Sudanese Students Union (GSSU)", country: "Sudan", type: "Full Member" },
    { region: "EAST AFRICA", org: "South Sudanese National Students' Union (SSNSU)", country: "South Sudan", type: "Full Member" },
    { region: "EAST AFRICA", org: "South Sudanese General Students Union (SSGSU)", country: "South Sudan", type: "Associate Member" },
    { region: "EAST AFRICA", org: "Tanzania Higher Learning Institution Students Organisation (TAHLISO)", country: "Tanzania", type: "Full Member" }
  ];

  const regions = ['ALL', 'NORTH AFRICA', 'WEST AFRICA', 'CENTRAL AFRICA', 'EAST AFRICA', 'SOUTHERN AFRICA'];

  const filteredMembers = activeRegion === 'ALL' 
    ? members 
    : members.filter(m => m.region === activeRegion);

  return (
    <div className="membership-page">
      {/* Page Header Image */}
      <section className="membership-hero">
      </section>

      {/* Intro Section */}
      <section className="membership-intro">
        <div className="container">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Membership
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="membership-subtitle"
          >
            Membership of the All-Africa Students Union (AASU) comprises all national student unions across the 54 African Countries. The organization is also open to youth groups and all tertiary institutions on the continent (Universities, Polytechnics, Nursing Training Institutions, etc).
          </motion.p>
        </div>
      </section>

      {/* Offices Section */}
      <section className="offices-section">
        <div className="container">
          <div className="hq-block">
            <h3>Headquarters</h3>
            <div className="hq-location">
              <MapPin className="text-red" size={24} />
              <span>Accra - Ghana</span>
            </div>
            <div className="red-divider"></div>
          </div>
          
          <p className="offices-intro">
            Siting of regional offices in the following countries remain work in progress, and significant strides have been made in achieving this
          </p>

          <div className="regional-offices-grid">
            {[
              { region: "North Africa", country: "Mauritania" },
              { region: "East Africa", country: "Ethiopia" },
              { region: "West Africa", country: "Senegal" },
              { region: "Central Africa", country: "Cameroon" },
              { region: "Southern Africa", country: "Botswana" }
            ].map((office, i) => (
              <div className="regional-office" key={i}>
                <Navigation className="text-red" size={16} fill="var(--primary-red)" />
                <span className="region">{office.region} -</span>
                <span className="country">{office.country}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Directory Table */}
      <section className="directory-section">
        <div className="container">
          
          <div className="directory-controls">
            {regions.map(r => (
              <button 
                key={r}
                className={`filter-btn ${activeRegion === r ? 'active' : ''}`}
                onClick={() => setActiveRegion(r)}
              >
                {r}
              </button>
            ))}
          </div>

          <div className="table-wrapper">
            <table className="members-table">
              <thead>
                <tr>
                  <th className="th-org">Organisation</th>
                  <th className="th-country">Country</th>
                  <th className="th-type">Classification</th>
                </tr>
              </thead>
              <tbody>
                {filteredMembers.map((member, idx) => (
                  <tr key={idx} className="member-row">
                    <td className="td-org">{member.org}</td>
                    <td className="td-country">
                      <span className="flag">{flagEmojis[member.country] || "🌐"}</span>
                      {member.country}
                    </td>
                    <td className="td-type">
                      <span className={`member-badge ${member.type === 'Full Member' ? 'full' : 'associate'}`}>
                        {member.type}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{ __html: `
        .membership-page {
          background-color: #fcfcfc;
        }

        .membership-hero {
          background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/history-bg.png') center/cover no-repeat;
          height: 550px;
          border-bottom: 5px solid var(--primary-red);
        }

        .membership-intro {
          text-align: left;
          padding: 80px 0 40px;
          background: #fff;
        }

        .membership-intro h1 {
          font-family: var(--font-headings);
          font-size: 3.5rem;
          font-weight: 900;
          color: #111;
          margin-bottom: 1.5rem;
        }

        .membership-subtitle {
          color: #666;
          font-size: 1.1rem;
          line-height: 1.8;
          max-width: 900px;
          margin: 0;
        }

        .offices-section {
          background: #f4f4f4;
          padding: 60px 0;
          text-align: left;
        }

        .hq-block h3 {
          font-size: 1.2rem;
          font-weight: 700;
          color: #333;
          margin-bottom: 0.5rem;
        }

        .hq-location {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 1.3rem;
          font-weight: 600;
          color: #222;
          margin-bottom: 1rem;
        }

        .text-red {
          color: var(--primary-red);
        }

        .red-divider {
          width: 50px;
          height: 2px;
          background-color: var(--primary-red);
          margin: 0 0 2rem;
        }

        .offices-intro {
          color: #777;
          font-size: 0.95rem;
          max-width: 700px;
          margin: 0 0 2rem;
        }

        .regional-offices-grid {
          display: flex;
          flex-wrap: wrap;
          justify-content: flex-start;
          gap: 1.5rem;
        }

        .regional-office {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          background: white;
          padding: 0.6rem 1.2rem;
          border-radius: 50px;
          box-shadow: 0 4px 10px rgba(0,0,0,0.03);
          font-size: 0.95rem;
        }

        .regional-office .region {
          color: #555;
        }

        .regional-office .country {
          font-weight: 700;
          color: #111;
        }

        .directory-section {
          padding: 80px 0 120px;
        }

        .directory-controls {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 0.8rem;
          margin-bottom: 3rem;
        }

        .filter-btn {
          background: #fff;
          border: 1px solid #ddd;
          color: #555;
          padding: 0.6rem 1.5rem;
          border-radius: 50px;
          font-weight: 600;
          font-size: 0.9rem;
          cursor: pointer;
          transition: all 0.2s;
        }

        .filter-btn:hover {
          border-color: var(--primary-red);
          color: var(--primary-red);
        }

        .filter-btn.active {
          background: var(--primary-red);
          border-color: var(--primary-red);
          color: white;
        }

        .table-wrapper {
          background: #fff;
          border-radius: 12px;
          box-shadow: 0 15px 40px rgba(0,0,0,0.05);
          overflow-x: auto;
        }

        .members-table {
          width: 100%;
          border-collapse: collapse;
          text-align: left;
        }

        .members-table th {
          background: #111;
          color: white;
          padding: 1.2rem 1.5rem;
          font-weight: 600;
          font-size: 0.9rem;
          letter-spacing: 0.5px;
          text-transform: capitalize;
        }

        .members-table td {
          padding: 1.2rem 1.5rem;
          border-bottom: 1px solid #f0f0f0;
          color: #444;
        }

        .member-row:hover td {
          background-color: #fafafa;
        }

        .td-org {
          font-weight: 500;
          color: #222;
        }

        .td-country {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          font-weight: 500;
        }

        .flag {
          font-size: 1.2rem;
        }

        .member-badge {
          display: inline-block;
          padding: 0.4rem 0.8rem;
          border-radius: 4px;
          font-size: 0.8rem;
          font-weight: 600;
        }

        .member-badge.full {
          background: rgba(203, 54, 49, 0.1);
          color: var(--primary-red);
        }

        .member-badge.associate {
          background: #f0f0f0;
          color: #666;
        }

        @media (max-width: 768px) {
          .membership-hero {
            height: 300px;
          }
          .membership-intro h1 {
            font-size: 2.5rem;
          }
          .members-table th, .members-table td {
            padding: 1rem;
          }
          .td-org {
            min-width: 250px;
          }
        }
      `}} />
    </div>
  );
};

export default MembershipPage;
