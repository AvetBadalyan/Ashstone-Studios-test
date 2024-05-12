/* eslint-disable react/prop-types */
export const CardContent = ({ card }) => {
  const { img, img_2x, title, tags, autor, date, views, text } = card;
  return (
    <>
      <img src={img} srcSet={`${img} 1x, ${img_2x} 2x`} alt={title} />
      <div className="tags">{tags}</div>
      <h2 className="title">{title}</h2>
      <div className="meta">
        <span className="author">{autor}</span>
        <span className="date">{date}</span>
        <span className="views">{views} views</span>
      </div>
      <p className="text">{text}</p>
    </>
  );
};
