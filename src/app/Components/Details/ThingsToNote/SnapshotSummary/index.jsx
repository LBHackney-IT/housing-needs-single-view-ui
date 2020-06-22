import React from 'react';
import classnames from 'classnames';
import styles from './index.module.scss';

const ColorPointList = ({ items, type }) => (
  <ul className={classnames(styles.points, styles[type])}>
    {items.map(text => (
      <li key={text}>{text}</li>
    ))}
  </ul>
);

const SnapshotSummary = ({ snapshot }) => (
  <>
    <section data-testid="snapshot-vulnerabilities">
      <header>
        <h3>Vulnerabilities</h3>
      </header>
      <ColorPointList type="vulnerability" items={snapshot.vulnerabilities} />
    </section>
    <hr />
    <section className={styles.list} data-testid="snapshot-assets">
      <header>
        <h3>Strengths / assets</h3>
      </header>
      <ColorPointList type="strength" items={snapshot.assets} />
    </section>
  </>
);

export default SnapshotSummary;
