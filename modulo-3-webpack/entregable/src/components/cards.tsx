import React from "react";

export const Cards: React.FC = () => {
  const [card, setCard] = React.useState([]);

  const api = process.env.API_BASE;

  React.useEffect(() => {
    fetch(api)
      .then((resp) => resp.json())
      .then((data) => {
        return setCard(data.count);
      });
  }, []);

  return (
    <div>
        {card}
    </div>
  );
};
