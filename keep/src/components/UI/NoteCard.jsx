import "./NoteCard.module.css";

const NoteCard = (props) => {
  const classes = "note-card " + props.className;

  return <div className={classes}>{props.children}</div>;
};

export default NoteCard;
