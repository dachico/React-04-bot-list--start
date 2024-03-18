import { Card } from "./card";
export function List({ listData }) {
  console.log(listData[0]);
  return (
    <div className="cards-list">
      <ul>
        {listData.map((item) => (
          <li className="card-item" key={item.id}>
            <Card {...item} />
          </li>
        ))}
      </ul>
    </div>
  );
}
