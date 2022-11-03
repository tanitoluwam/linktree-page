import React from "react";
import { Link } from "../link/Link";

const links = [
  {
    text: 'Twitter Link',
    url: 'https://twitter.com/adenugatani',
    id:"twitter"
  },
  {
    text: 'Zuri Team',
    url: 'https://training.zuri.team/',
    id:"btn__zuri"
  },
  {
    text: 'Zuri Books',
    url: 'http://books.zuri.team',
    id:"books"
  },
  {
    text: 'Python Books',
    url: 'https://books.zuri.team/python-for-beginners?ref_id=tanitoluwaadenuga',
    id:"book__python"
  },
  {
    text: 'Background check for coders',
    url: 'https://background.zuri.team',
    id:"pitch"
  },
  {
    text: 'Design Books',
    url: 'https://books.zuri.team/design-rules',
    id:"book__design"
  },
  {
    text: 'Contact Me',
    url: 'https://books.zuri.team/design-rules',
    id:"contact"
  },
  
]

export const LinkRow = () => {
  return (
    <div className="flex flex-col justify-center ">
      {links.map(link => (
        <Link text={link.text} url={link.url} id={link.id} />
      ))}
    </div>
  );
};

