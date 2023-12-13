import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Product Creation',
    Svg: require('@site/static/img/product-create.svg').default,
    description: (
      <>
        New Product creation via step by step editor.
      </>
    ),
  },
  {
    title: 'Product Bulk Upload',
    Svg: require('@site/static/img/product-bulk.svg').default,
    description: (
      <>
        Upload template files for bulk Product Creation.
      </>
    ),
  },
  {
    title: 'Supplier Stock Reports',
    Svg: require('@site/static/img/email-report.svg').default,
    description: (
      <>
        Request Supplier Stock report emails.
      </>
    ),
  }
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
