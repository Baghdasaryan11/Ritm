interface ICategoryItem {
  name: string;
  id: number;
  img: string;
  rootId: number;
  raiting?: number;
  address?: string;
  phone?: string;
  email?: string;
  workTime?: {
    [key: string]: string;
  };
  desc?: string;
  socialLinks?: {
    instagram: string;
    facebook: string;
  };
}

interface ICategory {
  id: number;
  type: string;
  path: string;
  data: ICategoryItem[];
}

export const CategoriesData: ICategory[] = [
  {
    id: 1,
    type: "Bar",
    path: "bars",
    // data: ["Kong", "Mamba", "Mamoor", "Pheonix", "Pahest33"],
    data: [
      {
        id: 1,
        rootId: 1,
        name: "Kong",
        img: "https://scontent-sof1-2.xx.fbcdn.net/v/t1.6435-9/67232493_2415074321892032_2734852436119257088_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=2NiPZ-MTtwcAX-G0_ui&tn=eUMDqQg0Zn8fiSTN&_nc_ht=scontent-sof1-2.xx&oh=00_AT8YlU7owCTDJBdOMcMujnfdcWhRFZH6BeuOWwzhHDKA6Q&oe=62DB8E78",
        address: "3/1 Abovyan street 0010 Yerevan, Armenia",
        desc: "Cafe · Cocktail Bar",
        email: "team@kong.am",
        phone: "044 347347",
        socialLinks: {
          facebook: "https://www.facebook.com/kong.evn",
          instagram: "https://www.instagram.com/kong.evn/",
        },
        workTime: {
          Monday: "6:00 PM - 2:00 AM",
          Tuesday: "6:00 PM - 2:00 AM",
          Wednesday: "6:00 PM - 2:00 AM",
          Thursday: "6:00 PM - 2:00 AM",
          Friday: "6:00 PM - 3:00 AM",
          Saturday: "6:00 PM - 3:00 AM",
          Sunday: "6:00 PM - 2:00 AM",
        },
      },
      {
        id: 2,
        rootId: 1,
        name: "Mamba",
        img: "https://scontent.fevn6-4.fna.fbcdn.net/v/t1.6435-9/130394672_176787450697223_1762837762440952111_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=ha2XmKC-8N0AX_9fv2t&_nc_ht=scontent.fevn6-4.fna&oh=00_AT90URMx3vksvWPwXCOPA0o6QI4eYpVrPwT86wzv7LqaRA&oe=62DC5A14",
        address: "Abovyan 3/1 Yerevan, Armenia",
        desc: "Cocktail Bar",
        email: "",
        phone: "055 347347",
        socialLinks: {
          facebook: "https://www.facebook.com/mamba.evn",
          instagram: "http://www.instagram.com/mamba.evn",
        },
        workTime: {
          Monday: "6:00 PM - 2:00 AM",
          Tuesday: "6:00 PM - 2:00 AM",
          Wednesday: "6:00 PM - 2:00 AM",
          Thursday: "6:00 PM - 2:00 AM",
          Friday: "6:00 PM - 3:00 AM",
          Saturday: "6:00 PM - 3:00 AM",
          Sunday: "6:00 PM - 2:00 AM",
        },
      },
      {
        id: 3,
        rootId: 1,
        name: "Mamoor",
        img: "https://scontent.fevn6-2.fna.fbcdn.net/v/t39.30808-6/274342717_2129219013910920_8436362729717991453_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=F6-GdFfCR44AX_bp2lW&tn=eUMDqQg0Zn8fiSTN&_nc_ht=scontent.fevn6-2.fna&oh=00_AT_ir2AJE2rdpZXRWKxckVtAPjDPt1tSzs5lzYnNfiSP1w&oe=62BA47D6",
        address: "Abovyan 14 0002 Yerevan, Armenia",
        desc: "European Restaurant",
        email: "mamooryerevan@gmail.com",
        phone: "044 548484",
        socialLinks: {
          facebook: "https://www.facebook.com/kong.evn",
          instagram: "https://www.instagram.com/mamoor_restaurant/",
        },
        workTime: {
          Monday: "11:00 AM - 1:00 AM",
          Tuesday: "11:00 AM - 1:00 AM",
          Wednesday: "11:00 AM - 1:00 AM",
          Thursday: "11:00 AM - 1:00 AM",
          Friday: "11:00 AM - 1:00 AM",
          Saturday: "11:00 AM - 1:00 AM",
          Sunday: "11:00 AM - 1:00 AM",
        },
      },
      {
        id: 4,
        rootId: 1,
        name: "Pheonix",
        img: "https://scontent.fevn6-4.fna.fbcdn.net/v/t1.6435-9/118149525_638930210085748_325786683690374172_n.png?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=w3sBm9bMvRQAX9ZjSO2&_nc_ht=scontent.fevn6-4.fna&oh=00_AT9hppif3t9mDJQ4pFRj5znwhrmhVs8a7s4GArpIXe4h1g&oe=62DA2514",
      },
      {
        id: 5,
        rootId: 1,
        name: "Pahest33",
        img: "https://scontent-sof1-2.xx.fbcdn.net/v/t39.30808-6/272131058_1142534233147524_2976807025734376223_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=0wR-nvEpCBsAX8EjnCf&_nc_ht=scontent-sof1-2.xx&oh=00_AT_ziw0o2Gw7wlByVYCYjS9Iozkh8_ofg6pXZaJMuwMegg&oe=62BC02C1",
      },
    ],
  },
  {
    id: 2,
    type: "Beer House",
    path: "beer-house",
    data: [],
  },
];
