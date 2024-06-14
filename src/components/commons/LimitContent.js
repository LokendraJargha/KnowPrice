const LimitContent = ({ content, limit }) => {
  if (content?.length <= limit) {
    return <div>{content}</div>;
  }
  const toShow = content?.substring(0, limit) + "...";
  return <div>{toShow}</div>;
};
export default LimitContent;
