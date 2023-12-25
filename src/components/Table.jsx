import React from "react";

const Table = ({
  gamesData,
  titleText,
  effectiveDateText,
  expiryDateText,
  iconText,
}) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  };

  return (
    <table
      style={{
        borderCollapse: "collapse",
        width: "100%",
        margin: "0 auto",
      }}
    >
      <thead>
        <tr>
          <th style={{ padding: "10px", textAlign: "left" }}>{titleText}</th>
          <th style={{ padding: "10px", textAlign: "left" }}>
            {effectiveDateText}
          </th>
          <th style={{ padding: "10px", textAlign: "left" }}>
            {expiryDateText}
          </th>
          <th style={{ padding: "10px", textAlign: "left" }}>{iconText}</th>
        </tr>
      </thead>
      <tbody>
        {gamesData.map((game) => (
          <tr key={game.id}>
            <td style={{ padding: "10px", textAlign: "left" }}>{game.title}</td>
            <td style={{ padding: "10px", textAlign: "left" }}>
              {formatDate(game.effectiveDate)}
            </td>
            <td style={{ padding: "10px", textAlign: "left" }}>
              {game.expiryDate ? formatDate(game.expiryDate) : "-"}
            </td>
            <td style={{ padding: "10px", textAlign: "left" }}>
              {game.keyImages && game.keyImages.length > 0 && (
                <img
                  src={game.keyImages[0].url}
                  alt="Icon"
                  style={{ width: "50px", height: "50px" }}
                />
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
