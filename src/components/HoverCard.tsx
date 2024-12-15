import { ItemType, isEventType } from "@/types";
import Link from "next/link";

interface Props {
  item: ItemType;
  dataAos?: string;
  link?: string;
}

const HoverCard: React.FC<Props> = ({ item, dataAos, link }) => {
  const href =
    link === "none"
      ? "/"
      : link ||
        (item.tip === "blog" ? `/blogs/${item.slug}` : `/events/${item.slug}`);

  return (
    <Link className="hoverCardLink" data-aos={dataAos} href={href}>
      <div className="hoverCard">
        <img src={item.img} alt={item.title} />
        <div className="content">
          <h3>
            {isEventType(item) ? `${item.type}: ${item.title}` : item.title}
          </h3>
          <p className="read-more">Прочитај повеќе</p>
        </div>
      </div>
      <div className="hidden">
        <p>{item.description}</p>
      </div>
    </Link>
  );
};

export default HoverCard;
