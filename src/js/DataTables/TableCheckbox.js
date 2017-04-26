import React, { Component, PropTypes } from 'react';
import cn from 'classnames';
import SelectionControl from '../SelectionControls/SelectionControl';

import findTable from './findTable';

export default class TableCheckbox extends Component {
  static propTypes = {
    index: PropTypes.number,
    checked: PropTypes.bool,
  };

  static contextTypes = {
    rowId: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
    ]).isRequired,
    baseName: PropTypes.string.isRequired,
    indeterminate: PropTypes.bool,
    checkedIconChildren: PropTypes.node,
    checkedIconClassName: PropTypes.string,
    uncheckedIconChildren: PropTypes.node,
    uncheckedIconClassName: PropTypes.string,
    indeterminateIconChildren: PropTypes.node,
    indeterminateIconClassName: PropTypes.string,
    checkboxHeaderLabel: PropTypes.string.isRequired,
    checkboxLabelTemplate: PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.string,
    ]).isRequired,
    createCheckbox: PropTypes.func.isRequired,
    removeCheckbox: PropTypes.func.isRequired,
    header: PropTypes.bool,
    footer: PropTypes.bool,
    fixedHeader: PropTypes.bool.isRequired,
    fixedFooter: PropTypes.bool.isRequired,
  };

  constructor(props, context) {
    super(props, context);

    this._td = null;
    this._header = false;
    this._handleMount = this._handleMount.bind(this);
  }

  _handleMount(td) {
    if (td) {
      const header = findTable(td).querySelector('thead');
      const index = td.parentNode.rowIndex - (header ? 1 : 0);

      if (td.parentNode.parentNode.tagName === 'TBODY') {
        this.context.createCheckbox(index);
      }
      this._td = td;
      this._header = header;
    } else if (this._td) {
      const index = this._td.parentNode.rowIndex;
      this.context.removeCheckbox(index - (this._header ? 1 : 0));
      this._td = null;
      this._header = false;
    }
  }

  render() {
    const { checked, index, ...props } = this.props;
    const {
      checkedIconChildren,
      checkedIconClassName,
      uncheckedIconChildren,
      uncheckedIconClassName,
      indeterminateIconChildren,
      indeterminateIconClassName,
      indeterminate,
      header,
      footer,
      rowId,
      baseName,
      checkboxHeaderLabel,
      checkboxLabelTemplate,
    } = this.context;

    const Cell = header ? 'th' : 'td';
    let label;
    if (header) {
      label = checkboxHeaderLabel;
    } else if (typeof checkboxLabelTemplate === 'function') {
      label = checkboxLabelTemplate(index);
    } else {
      label = checkboxLabelTemplate.replace(/{{row}}/g, index);
    }

    let content = (
      <SelectionControl
        {...props}
        id={rowId}
        name={`${baseName}-checkbox`}
        type="checkbox"
        checked={checked}
        uncheckedCheckboxIconChildren={header && indeterminate ? indeterminateIconChildren : uncheckedIconChildren}
        uncheckedCheckboxIconClassName={header && indeterminate ? indeterminateIconClassName : uncheckedIconClassName}
        checkedCheckboxIconChildren={checkedIconChildren}
        checkedCheckboxIconClassName={checkedIconClassName}
        aria-label={label}
      />
    );
    const fixedHeader = header && this.context.fixedHeader;
    const fixedFooter = footer && this.context.fixedFooter;

    if (fixedHeader) {
      content = (
        <div
          className={cn('md-table-column__fixed', {
            'md-table-column__fixed--header': fixedHeader,
            'md-table-column__fixed--footer': fixedFooter,
          })}
        >
          {React.cloneElement(content, {
            className: cn({
              'md-table-checkbox--header': header,
              'md-table-checkbox--footer': footer,
            }),
          })}
        </div>
      );
    }


    return (
      <Cell
        className={cn('md-table-checkbox', {
          'md-table-column--fixed': fixedHeader,
        })}
        scope={header ? 'col' : undefined}
        ref={this._handleMount}
      >
        {content}
      </Cell>
    );
  }
}
