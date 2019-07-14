function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import * as React from 'react';
import { ConfigConsumer } from '../config-provider';
import Icon from '../icon';
import classnames from 'classnames';
import Divider from '../divider';
import Breadcrumb from '../breadcrumb';
import Wave from '../_util/wave';

var renderBack = function renderBack(prefixCls, backIcon, onBack) {
  if (!backIcon || !onBack) {
    return null;
  }

  return React.createElement("div", {
    className: "".concat(prefixCls, "-back-icon"),
    onClick: function onClick(e) {
      if (onBack) {
        onBack(e);
      }
    }
  }, React.createElement(Wave, null, backIcon), React.createElement(Divider, {
    type: "vertical"
  }));
};

var renderBreadcrumb = function renderBreadcrumb(breadcrumb) {
  return React.createElement(Breadcrumb, breadcrumb);
};

var renderHeader = function renderHeader(prefixCls, props) {
  var breadcrumb = props.breadcrumb,
      backIcon = props.backIcon,
      onBack = props.onBack;

  if (breadcrumb && breadcrumb.routes && breadcrumb.routes.length >= 2) {
    return renderBreadcrumb(breadcrumb);
  }

  return renderBack(prefixCls, backIcon, onBack);
};

var renderTitle = function renderTitle(prefixCls, props) {
  var title = props.title,
      subTitle = props.subTitle,
      tags = props.tags,
      extra = props.extra;
  var titlePrefixCls = "".concat(prefixCls, "-title-view");
  return React.createElement("div", {
    className: "".concat(prefixCls, "-title-view")
  }, React.createElement("span", {
    className: "".concat(titlePrefixCls, "-title")
  }, title), subTitle && React.createElement("span", {
    className: "".concat(titlePrefixCls, "-sub-title")
  }, subTitle), tags && React.createElement("span", {
    className: "".concat(titlePrefixCls, "-tags")
  }, tags), extra && React.createElement("span", {
    className: "".concat(titlePrefixCls, "-extra")
  }, extra));
};

var renderFooter = function renderFooter(prefixCls, footer) {
  if (footer) {
    return React.createElement("div", {
      className: "".concat(prefixCls, "-footer")
    }, footer);
  }

  return null;
};

var PageHeader = function PageHeader(props) {
  return React.createElement(ConfigConsumer, null, function (_ref) {
    var getPrefixCls = _ref.getPrefixCls;
    var customizePrefixCls = props.prefixCls,
        style = props.style,
        footer = props.footer,
        children = props.children,
        customizeClassName = props.className;
    var prefixCls = getPrefixCls('page-header', customizePrefixCls);
    var className = classnames(prefixCls, _defineProperty({}, "".concat(prefixCls, "-has-footer"), footer), customizeClassName);
    return React.createElement("div", {
      className: className,
      style: style
    }, renderHeader(prefixCls, props), renderTitle(prefixCls, props), children && React.createElement("div", {
      className: "".concat(prefixCls, "-content-view")
    }, children), renderFooter(prefixCls, footer));
  });
};

PageHeader.defaultProps = {
  backIcon: React.createElement(Icon, {
    type: "arrow-left"
  })
};
export default PageHeader;