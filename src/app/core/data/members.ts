export interface Member {
  id: number;
  name: string;
  role: string;
  image: string;
}

export const MEMBERS: Member[] = [
  {
    id: 1,
    name: "Ol Sokchetra",
    role: "Founder & CEO",
    image: 'images/members/tra.jpg'
  },
  {
    id: 2,
    name: "Vy Hourtong",
    role: "Head Chef",
    image: 'images/members/tong.jpg'
  },
  {
    id: 3,
    name: "Khim Chanborith",
    role: "Burger Specialist",
    image: 'images/members/rith.jpg'
  },
  {
    id: 4,
    name: "Ra Kimhort",
    role: "Marketing Manager",
    image: 'images/members/hort.jpg'
  },
  {
    id: 5,
    name: "Phorn Chanthol",
    role: "Restaurant Manager",
    image: 'images/members/thol.jpg'
  },
  {
    id: 6,
    name: "Long Sereymuny",
    role: "Customer Care",
    image: 'images/members/muny.jpg'
  },
  {
    id: 7,
    name: "Thai Kimleng",
    role: "Creative Designer",
    image: 'images/members/leng.jpg'
  }
];