import React from 'react';

import { MDXRenderer } from 'gatsby-plugin-mdx';
import { MDXProvider } from '@mdx-js/react';
import { toKebabCase } from '../helpers/casingUtils';

interface MdxProviderProps {
  children: string;
}

// adds id to heading elements for in-page linking
const HeadingWithId = (props: MdxProviderProps, Component) => {
  return <Component {...props} id={toKebabCase(props.children)} />;
};

// adds DS styling to tables from markdown
const TableWithClassnames = (props) => {
  return <table className="ds-c-table" {...props}></table>;
};

/**
 * A mapping of custom components for mdx syntax
 * Each mapping has a key with the element name and a value of a functional component to be used for that element
 */
const customComponents = {
  h2: (props) => HeadingWithId(props, 'h2'),
  h3: (props) => HeadingWithId(props, 'h3'),
  h4: (props) => HeadingWithId(props, 'h4'),
  h5: (props) => HeadingWithId(props, 'h5'),
  h6: (props) => HeadingWithId(props, 'h6'),
  table: TableWithClassnames,
};

interface ContentRendererProps {
  /**
   * A string of mdx data returned from graphQL
   * Usually the `data.body.mdx` property from a `mdx` graphQL query
   */
  data: string;
}

/**
 * ContentRenderer - a component to standardize the steps needed to display MDX content as page content
 * @see https://www.gatsbyjs.com/plugins/gatsby-plugin-mdx/#components for details
 */
const ContentRenderer = ({ data }: ContentRendererProps) => {
  return (
    <MDXProvider components={customComponents}>
      <MDXRenderer>{data}</MDXRenderer>
    </MDXProvider>
  );
};

export default ContentRenderer;
