import React from 'react';
const tags = [
  'Friends',
  'Colleagues',
  'Family',
  'Clients',
  'Students',
  'ClassMates',
];
const tagColor = [
  '#CD3131',
  '#4482FF',
  '#0962EA',
  '#141829',
  '#FFCD38',
  '#61105E',
];

function gettags(mails, filterAttr) {
  const tags = {};
  mails.forEach(mail => {
    if (mail.tags && mail.bucket === filterAttr.bucket) {
      mail.tags.split(' ').forEach(tag => tags[tag] = 1);
    }
  });
  return tags;
}

export default function mailtags(
  mails,
  filterAction,
  filterAttr,
  onDrawerClose,
) {
  const Tags = gettags(mails, filterAttr);
  const renderSingleTag = (tag, key) => {
    const onClick = () => {
      filterAction({ tag });
      if (onDrawerClose) {
        onDrawerClose();
      }
    };
    const selectedTag = tag === filterAttr.tag;
    const activeClass = selectedTag ? 'active' : '';
    const background = tagColor[tags.findIndex(tags => tags === tag)];
    return (
      <li
        key={`tag${key}`}
        onClick={onClick}
        className={`isoMailTag ${activeClass}`}
      >
        <span className="isoLabelIndicatorColor" style={{ background }} />
        <span>{tag}</span>
      </li>
    );
  };
  return (
    <ul className="isoMailTagList">
      <p className="isoSectionLabel">Label</p>
      {Object.keys(Tags).map((tag, index) => renderSingleTag(tag, index))}
    </ul>
  );
}
export { tags, tagColor };
