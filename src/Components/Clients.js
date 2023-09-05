
import React from 'react';
import './Clients.css'

const clients = [
  {
    id: 1,
    name: 'Limpopo Home Cinema',
    logoUrl: 'https://scontent-cpt1-1.xx.fbcdn.net/v/t39.30808-6/304696275_384091183904855_6020908458252520088_n.png?_nc_cat=108&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=ffBDnVFqZBUAX_AGAAc&_nc_ht=scontent-cpt1-1.xx&oh=00_AfB8XvOy181RtYSi2BIeiVlp6zNDCP9g_d6dSXJrdJynvA&oe=64FBF7E6',
  },
  {
    id: 2,
    name: 'Ayanda Mbanga Communications',
    logoUrl: 'https://ayandambanga.co.za/wp-content/uploads/2023/01/Ayanda-Mbanga-Logo-Strapline.png',
  },

  {
    id: 3,
    name: 'Ruedesley global',
    logoUrl: 'https://cdn.statically.io/img/ruedesleyglobal.com/wp-content/uploads/2022/11/ruedesleylogo.png?quality=100&f=auto',
  },
  {
    id: 4,
    name: 'belly of the beast',
    logoUrl: 'https://bellyofthebeast.co.za/cdn/shop/files/black_bob_logo-01_copy_2_200x@2x.png?v=1613694540',
  },
  {
    id: 5,
    name: 'lekker vegan',
    logoUrl: 'https://lekkervegan.co.za/wp-content/uploads/2020/04/cropped-Lekker-Vegan-Logo-Banner.png',
  },
  {
    id: 6,
    name: 'Mystyle App',
    logoUrl: 'https://play-lh.googleusercontent.com/EI7ZOs_bv8i2fPHgQWJdiamMWCx2yNYuj0JgKMZ-n1rHgAM1L3nqcJng3K4jaNuJLg=w480-h960-rw',
  },
  {
    id: 7,
    name: 'East City Boxing',
    logoUrl: 'https://scontent-cpt1-1.xx.fbcdn.net/v/t39.30808-6/301568402_388097223480580_1447966607752105465_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=wuln9z4I78MAX_QO0rI&_nc_ht=scontent-cpt1-1.xx&oh=00_AfAu5Ffc8h5RuOu-LgUHeXtxBgw_Y9-xUHMJ8oDiJ9bDlg&oe=64FBC96E',
  },
  {
    id: 8,
    name: 'Ayanda Mbanga Communications',
    logoUrl: 'https://spaceplus.co.za/wp-content/uploads/2019/03/Spaceplus-logo@15x.png',
  },
  {
    id: 9,
    name: 'Pause beauty and Hair',
    logoUrl: 'https://scontent-cpt1-1.xx.fbcdn.net/v/t39.30808-6/301583630_484403353694852_4891008040817278518_n.png?_nc_cat=107&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=QLuUeXHQV6kAX_x1uFW&_nc_ht=scontent-cpt1-1.xx&oh=00_AfARpaFSfN0F6zZFjKVjswkMnl7yMDoP2h9SB_aygtLjZQ&oe=64FAC9E8',
  },
  {
    id: 10,
    name: 'Laureus sports for good',
    logoUrl: 'https://www.laureus.com/getmedia/d6463747-792a-4224-969e-9ec340e96da1/LaureusLogoV2.png',
  },
  {
    id: 11,
    name: 'Echo Kitchens',
    logoUrl: 'https://new.echokitchens.co.za/wp-content/uploads/2022/10/Echo-Kitchens-Logo-Vector.1.png',
  },
  {
    id: 12,
    name: 'A minute with lerato',
    logoUrl: 'https://scontent-cpt1-1.xx.fbcdn.net/v/t39.30808-6/300373484_405623445029637_8748288495300877502_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=mfZWes-du5AAX8UoKbU&_nc_ht=scontent-cpt1-1.xx&oh=00_AfCzg_15iwl5lOVr5yEk-Dz_Y3zoKOnQPqNNyJ8KQDtYOg&oe=64FB6105',
  },
  {
    id: 13,
    name: 'Fabolous Women Awards',
    logoUrl: 'https://scontent-cpt1-1.xx.fbcdn.net/v/t39.30808-6/365315038_306539601898897_5596625511177267590_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=OSIei2vzDFwAX_HZjr_&_nc_ht=scontent-cpt1-1.xx&oh=00_AfAJ0FGyuKgvTJ_Xz8n3UcxEjKrFmbpHkKyX3rV-2lfdFg&oe=64FADC18',
  },
  {
    id: 14,
    name: 'Cape Town Cycle Tour',
    logoUrl: 'https://www.capetowncycletour.com/ctct-site/wp-content/uploads/2020/01/CTCT-no-sponsors-PNG-01-01.png',
  },
  {
    id: 15,
    name: 'In2food',
    logoUrl: 'https://in2food-project.net/logo.png',
  },
  {
    id: 16,
    name: 'Craft design institute',
    logoUrl: 'https://cdn.ymaws.com/ccdi.site-ym.com/graphics/logo4.png',
  },
  {
    id: 17,
    name: 'Maisha wellness',
    logoUrl: 'https://i.pinimg.com/280x280_RS/b9/9d/33/b99d33eb5db9b6d126049cd032900738.jpg',
  },
];

const ClientSection = () => {
  return (
    <section className="client-section">
      <h2 className='header'>Our Clients</h2>
      <div className="client-list">
        {clients.map((client) => (
          <div key={client.id} className="client-card">
            <img src={client.logoUrl} alt={client.name} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ClientSection;
