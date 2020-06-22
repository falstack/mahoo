exports.ids = [24];
exports.modules = {

/***/ 273:
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ image_ImageTool; });

// EXTERNAL MODULE: ./components/editor/plugin/image/index.scss
var plugin_image = __webpack_require__(273);

// CONCATENATED MODULE: ./components/editor/plugin/image/ui.js
/**
 * Class for working with UI:
 *  - rendering base structure
 *  - show/hide preview
 *  - apply tune view
 */
class Ui {
  /**
   * @param {object} api - Editor.js API
   * @param {ImageConfig} config - user config
   * @param {function} onSelectFile - callback for clicks on Select file buttor
   */
  constructor({
    api,
    config,
    onSelectFile
  }) {
    this.api = api;
    this.config = config;
    this.onSelectFile = onSelectFile;
    this.nodes = {
      wrapper: make('div', [this.CSS.baseClass, this.CSS.wrapper]),
      imageContainer: make('div', [this.CSS.imageContainer]),
      fileButton: this.createFileButton(),
      imageEl: undefined,
      imagePreloader: make('div', this.CSS.imagePreloader),
      caption: make('div', [this.CSS.input, this.CSS.caption], {
        contentEditable: true
      })
    };
    /**
     * Create base structure
     *  <wrapper>
     *    <image-container>
     *      <image-preloader />
     *    </image-container>
     *    <caption />
     *    <select-file-button />
     *  </wrapper>
     */

    this.nodes.caption.dataset.placeholder = this.config.captionPlaceholder;
    this.nodes.imageContainer.appendChild(this.nodes.imagePreloader);
    this.nodes.wrapper.appendChild(this.nodes.imageContainer);
    this.nodes.wrapper.appendChild(this.nodes.caption);
    this.nodes.wrapper.appendChild(this.nodes.fileButton);
  }
  /**
   * CSS classes
   * @constructor
   */


  get CSS() {
    return {
      baseClass: this.api.styles.block,
      loading: this.api.styles.loader,
      input: this.api.styles.input,
      button: this.api.styles.button,

      /**
       * Tool's classes
       */
      wrapper: 'image-tool',
      imageContainer: 'image-tool__image',
      imagePreloader: 'image-tool__image-preloader',
      imageEl: 'image-tool__image-picture',
      caption: 'image-tool__caption'
    };
  }
  /**
   * Ui statuses:
   * - empty
   * - uploading
   * - filled
   * @return {{EMPTY: string, UPLOADING: string, FILLED: string}}
   */


  static get status() {
    return {
      EMPTY: 'empty',
      UPLOADING: 'loading',
      FILLED: 'filled'
    };
  }
  /**
   * @param {ImageToolData} toolData
   * @return {HTMLDivElement}
   */


  render(toolData) {
    if (!toolData.file || Object.keys(toolData.file).length === 0) {
      this.toggleStatus(Ui.status.EMPTY);
    } else {
      this.toggleStatus(Ui.status.UPLOADING);
    }

    return this.nodes.wrapper;
  }
  /**
   * Creates upload-file button
   * @return {Element}
   */


  createFileButton() {
    const button = make('div', [this.CSS.button]);
    button.innerHTML = this.config.buttonContent || `${'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">\n' + '    <path d="M3.15 13.628A7.749 7.749 0 0 0 10 17.75a7.74 7.74 0 0 0 6.305-3.242l-2.387-2.127-2.765 2.244-4.389-4.496-3.614 3.5zm-.787-2.303l4.446-4.371 4.52 4.63 2.534-2.057 3.533 2.797c.23-.734.354-1.514.354-2.324a7.75 7.75 0 1 0-15.387 1.325zM10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10z"/>\n' + '</svg>'} 选择一张图片`;
    button.addEventListener('click', () => {
      this.onSelectFile();
    });
    return button;
  }
  /**
   * Shows uploading preloader
   * @param {string} src - preview source
   */


  showPreloader(src) {
    this.nodes.imagePreloader.style.backgroundImage = `url(${src})`;
    this.toggleStatus(Ui.status.UPLOADING);
  }
  /**
   * Hide uploading preloader
   */


  hidePreloader() {
    this.nodes.imagePreloader.style.backgroundImage = '';
    this.toggleStatus(Ui.status.EMPTY);
  }
  /**
   * Shows an image
   * @param {string} url
   */


  fillImage(url) {
    /**
     * Check for a source extension to compose element correctly: video tag for mp4, img — for others
     */
    const tag = /\.mp4$/.test(url) ? 'VIDEO' : 'IMG';
    const attributes = {
      src: url
    };
    /**
     * We use eventName variable because IMG and VIDEO tags have different event to be called on source load
     * - IMG: load
     * - VIDEO: loadeddata
     * @type {string}
     */

    let eventName = 'load';
    /**
     * Update attributes and eventName if source is a mp4 video
     */

    if (tag === 'VIDEO') {
      /**
       * Add attributes for playing muted mp4 as a gif
       * @type {boolean}
       */
      attributes.autoplay = true;
      attributes.loop = true;
      attributes.muted = true;
      attributes.playsinline = true;
      /**
       * Change event to be listened
       * @type {string}
       */

      eventName = 'loadeddata';
    }
    /**
     * Compose tag with defined attributes
     * @type {Element}
     */


    this.nodes.imageEl = make(tag, this.CSS.imageEl, attributes);
    /**
     * Add load event listener
     */

    this.nodes.imageEl.addEventListener(eventName, () => {
      this.toggleStatus(Ui.status.FILLED);
      /**
       * Preloader does not exists on first rendering with presaved data
       */

      if (this.nodes.imagePreloader) {
        this.nodes.imagePreloader.style.backgroundImage = '';
      }
    });
    this.nodes.imageContainer.appendChild(this.nodes.imageEl);
  }
  /**
   * Shows caption input
   * @param {string} text - caption text
   */


  fillCaption(text) {
    if (this.nodes.caption) {
      this.nodes.caption.innerHTML = text;
    }
  }
  /**
   * Changes UI status
   * @param {string} status - see {@link Ui.status} constants
   */


  toggleStatus(status) {
    for (const statusType in Ui.status) {
      // eslint-disable-next-line
      if (Ui.status.hasOwnProperty(statusType)) {
        this.nodes.wrapper.classList.toggle(`${this.CSS.wrapper}--${Ui.status[statusType]}`, status === Ui.status[statusType]);
      }
    }
  }
  /**
   * Apply visual representation of activated tune
   * @param {string} tuneName - one of available tunes {@link Tunes.tunes}
   * @param {boolean} status - true for enable, false for disable
   */


  applyTune(tuneName, status) {
    this.nodes.wrapper.classList.toggle(`${this.CSS.wrapper}--${tuneName}`, status);
  }

}
/**
 * Helper for making Elements with attributes
 *
 * @param  {string} tagName           - new Element tag name
 * @param  {array|string} classNames  - list or name of CSS class
 * @param  {Object} attributes        - any attributes
 * @return {Element}
 */

const make = function make(tagName, classNames = null, attributes = {}) {
  const el = document.createElement(tagName);

  if (Array.isArray(classNames)) {
    el.classList.add(...classNames);
  } else if (classNames) {
    el.classList.add(classNames);
  }

  for (const attrName in attributes) {
    el[attrName] = attributes[attrName];
  }

  return el;
};
// CONCATENATED MODULE: ./components/editor/plugin/image/tunes.js

/**
 * Working with Block Tunes
 */

class tunes_Tunes {
  /**
   * @param {object} api - Editor API
   * @param {function} onChange - tune toggling callback
   */
  constructor({
    api,
    onChange
  }) {
    this.api = api;
    this.onChange = onChange;
    this.buttons = [];
  }
  /**
   * Available Image tunes
   */


  static get tunes() {
    return [{
      name: 'withBorder',
      icon: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M15.8 10.592v2.043h2.35v2.138H15.8v2.232h-2.25v-2.232h-2.4v-2.138h2.4v-2.28h2.25v.237h1.15-1.15zM1.9 8.455v-3.42c0-1.154.985-2.09 2.2-2.09h4.2v2.137H4.15v3.373H1.9zm0 2.137h2.25v3.325H8.3v2.138H4.1c-1.215 0-2.2-.936-2.2-2.09v-3.373zm15.05-2.137H14.7V5.082h-4.15V2.945h4.2c1.215 0 2.2.936 2.2 2.09v3.42z"/></svg>',
      title: 'With border'
    }, {
      name: 'stretched',
      icon: '<svg width="17" height="10" viewBox="0 0 17 10" xmlns="http://www.w3.org/2000/svg"><path d="M13.568 5.925H4.056l1.703 1.703a1.125 1.125 0 0 1-1.59 1.591L.962 6.014A1.069 1.069 0 0 1 .588 4.26L4.38.469a1.069 1.069 0 0 1 1.512 1.511L4.084 3.787h9.606l-1.85-1.85a1.069 1.069 0 1 1 1.512-1.51l3.792 3.791a1.069 1.069 0 0 1-.475 1.788L13.514 9.16a1.125 1.125 0 0 1-1.59-1.591l1.644-1.644z"/></svg>',
      title: 'Stretch image'
    }, {
      name: 'withBackground',
      icon: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.043 8.265l3.183-3.183h-2.924L4.75 10.636v2.923l4.15-4.15v2.351l-2.158 2.159H8.9v2.137H4.7c-1.215 0-2.2-.936-2.2-2.09v-8.93c0-1.154.985-2.09 2.2-2.09h10.663l.033-.033.034.034c1.178.04 2.12.96 2.12 2.089v3.23H15.3V5.359l-2.906 2.906h-2.35zM7.951 5.082H4.75v3.201l3.201-3.2zm5.099 7.078v3.04h4.15v-3.04h-4.15zm-1.1-2.137h6.35c.635 0 1.15.489 1.15 1.092v5.13c0 .603-.515 1.092-1.15 1.092h-6.35c-.635 0-1.15-.489-1.15-1.092v-5.13c0-.603.515-1.092 1.15-1.092z"/></svg>',
      title: 'With background'
    }];
  }
  /**
   * Styles
   * @return {{wrapper: string, buttonBase: *, button: string, buttonActive: *}}
   */


  get CSS() {
    return {
      wrapper: '',
      buttonBase: this.api.styles.settingsButton,
      button: 'image-tool__tune',
      buttonActive: this.api.styles.settingsButtonActive
    };
  }
  /**
   * Makes buttons with tunes: add background, add border, stretch image
   * @param {ImageToolData} toolData
   * @return {Element}
   */


  render(toolData) {
    const wrapper = make('div', this.CSS.wrapper);
    this.buttons = [];
    tunes_Tunes.tunes.forEach(tune => {
      const el = make('div', [this.CSS.buttonBase, this.CSS.button], {
        innerHTML: tune.icon,
        title: tune.title
      });
      el.addEventListener('click', () => {
        this.tuneClicked(tune.name);
      });
      el.dataset.tune = tune.name;
      el.classList.toggle(this.CSS.buttonActive, toolData[tune.name]);
      this.buttons.push(el);
      wrapper.appendChild(el);
    });
    return wrapper;
  }
  /**
   * Clicks to one of the tunes
   * @param {string} tuneName - clicked tune name
   */


  tuneClicked(tuneName) {
    const button = this.buttons.find(el => el.dataset.tune === tuneName);
    button.classList.toggle(this.CSS.buttonActive, !button.classList.contains(this.CSS.buttonActive));
    this.onChange(tuneName);
  }

}
// EXTERNAL MODULE: external "@codexteam/ajax"
var ajax_ = __webpack_require__(71);
var ajax_default = /*#__PURE__*/__webpack_require__.n(ajax_);

// CONCATENATED MODULE: ./components/editor/plugin/image/uploader.js

/**
 * Module for file uploading. Handle 3 scenarios:
 *  1. Select file from device and upload
 *  2. Upload by pasting URL
 *  3. Upload by pasting file from Clipboard or by Drag'n'Drop
 */

class uploader_Uploader {
  /**
   * @param {ImageConfig} config
   * @param {function} onUpload - one callback for all uploading (file, url, d-n-d, pasting)
   * @param {function} onError - callback for uploading errors
   */
  constructor({
    config,
    onUpload,
    onError
  }) {
    this.config = config;
    this.onUpload = onUpload;
    this.onError = onError;
  }
  /**
   * Handle clicks on the upload file button
   * @fires ajax.transport()
   * @param {function} onPreview - callback fired when preview is ready
   */


  uploadSelectedFile({
    onPreview
  }) {
    const preparePreview = function (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onload = e => {
        onPreview(e.target.result);
      };
    };
    /**
     * Custom uploading
     * or default uploading
     */


    let upload; // custom uploading

    if (this.config.uploader && typeof this.config.uploader.uploadByFile === 'function') {
      upload = ajax_default.a.selectFiles().then(files => {
        preparePreview(files[0]);
        const customUpload = this.config.uploader.uploadByFile(files[0]);

        if (!isPromise(customUpload)) {
          // eslint-disable-next-line
          console.warn('Custom uploader method uploadByFile should return a Promise');
        }

        return customUpload;
      }); // default uploading
    } else {
      upload = ajax_default.a.transport({
        url: this.config.endpoints.byFile,
        data: this.config.additionalRequestData,
        accept: this.config.types,
        headers: this.config.additionalRequestHeaders,
        beforeSend: files => {
          preparePreview(files[0]);
        },
        fieldName: this.config.field
      }).then(response => response.body);
    }

    upload.then(response => {
      this.onUpload(response);
    }).catch(error => {
      this.onError(error);
    });
  }
  /**
   * Handle clicks on the upload file button
   * @fires ajax.post()
   * @param {string} url - image source url
   */


  uploadByUrl(url) {
    let upload;
    /**
     * Custom uploading
     */

    if (this.config.uploader && typeof this.config.uploader.uploadByUrl === 'function') {
      upload = this.config.uploader.uploadByUrl(url);

      if (!isPromise(upload)) {
        // eslint-disable-next-line
        console.warn('Custom uploader method uploadByUrl should return a Promise');
      }
    } else {
      /**
       * Default uploading
       */
      upload = ajax_default.a.post({
        url: this.config.endpoints.byUrl,
        data: Object.assign({
          url
        }, this.config.additionalRequestData),
        type: ajax_default.a.contentType.JSON,
        headers: this.config.additionalRequestHeaders
      }).then(response => response.body);
    }

    upload.then(response => {
      this.onUpload(response);
    }).catch(error => {
      this.onError(error);
    });
  }
  /**
   * Handle clicks on the upload file button
   * @fires ajax.post()
   * @param {File} file - file pasted by drag-n-drop
   * @param {function} onPreview - file pasted by drag-n-drop
   */


  uploadByFile(file, {
    onPreview
  }) {
    /**
     * Load file for preview
     * @type {FileReader}
     */
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = e => {
      onPreview(e.target.result);
    };

    let upload;
    /**
     * Custom uploading
     */

    if (this.config.uploader && typeof this.config.uploader.uploadByFile === 'function') {
      upload = this.config.uploader.uploadByFile(file);

      if (!isPromise(upload)) {
        // eslint-disable-next-line
        console.warn('Custom uploader method uploadByFile should return a Promise');
      }
    } else {
      /**
       * Default uploading
       */
      const formData = new FormData();
      formData.append(this.config.field, file);

      if (this.config.additionalRequestData && Object.keys(this.config.additionalRequestData).length) {
        Object.entries(this.config.additionalRequestData).forEach(([name, value]) => {
          formData.append(name, value);
        });
      }

      upload = ajax_default.a.post({
        url: this.config.endpoints.byFile,
        data: formData,
        type: ajax_default.a.contentType.JSON,
        headers: this.config.additionalRequestHeaders
      }).then(response => response.body);
    }

    upload.then(response => {
      this.onUpload(response);
    }).catch(error => {
      this.onError(error);
    });
  }

}
/**
 * Check if passed object is a Promise
 * @param  {*}  object - object to check
 * @return {Boolean}
 */

function isPromise(object) {
  return Promise.resolve(object) === object;
}
// CONCATENATED MODULE: ./components/editor/plugin/image/index.js
/* eslint-disable */

/**
 * Image Tool for the Editor.js
 * @author CodeX <team@ifmo.su>
 * @license MIT
 * @see {@link https://github.com/editor-js/image}
 *
 * To developers.
 * To simplify Tool structure, we split it to 4 parts:
 *  1) index.js — main Tool's interface, public API and methods for working with data
 *  2) uploader.js — module that has methods for sending files via AJAX: from device, by URL or File pasting
 *  3) ui.js — module for UI manipulations: render, showing preloader, etc
 *  4) tunes.js — working with Block Tunes: render buttons, handle clicks
 *
 * For debug purposes there is a testing server
 * that can save uploaded files and return a Response {@link UploadResponseFormat}
 *
 *       $ node dev/server.js
 *
 * It will expose 8008 port, so you can pass http://localhost:8008 with the Tools config:
 *
 * image: {
 *   class: ImageTool,
 *   config: {
 *     endpoints: {
 *       byFile: 'http://localhost:8008/uploadFile',
 *       byUrl: 'http://localhost:8008/fetchUrl',
 *     }
 *   },
 * },
 */

/**
 * @typedef {object} ImageToolData
 * @description Image Tool's input and output data format
 * @property {string} caption — image caption
 * @property {boolean} withBorder - should image be rendered with border
 * @property {boolean} withBackground - should image be rendered with background
 * @property {boolean} stretched - should image be stretched to full width of container
 * @property {object} file — Image file data returned from backend
 * @property {string} file.url — image URL
 */
// eslint-disable-next-line




/**
 * @typedef {object} ImageConfig
 * @description Config supported by Tool
 * @property {object} endpoints - upload endpoints
 * @property {string} endpoints.byFile - upload by file
 * @property {string} endpoints.byUrl - upload by URL
 * @property {string} field - field name for uploaded image
 * @property {string} types - available mime-types
 * @property {string} captionPlaceholder - placeholder for Caption field
 * @property {object} additionalRequestData - any data to send with requests
 * @property {object} additionalRequestHeaders - allows to pass custom headers with Request
 * @property {string} buttonContent - overrides for Select File button
 * @property {object} [uploader] - optional custom uploader
 * @property {function(File): Promise.<UploadResponseFormat>} [uploader.uploadByFile] - method that upload image by File
 * @property {function(string): Promise.<UploadResponseFormat>} [uploader.uploadByUrl] - method that upload image by URL
 */

/**
 * @typedef {object} UploadResponseFormat
 * @description This format expected from backend on file uploading
 * @property {number} success - 1 for successful uploading, 0 for failure
 * @property {object} file - Object with file data.
 *                           'url' is required,
 *                           also can contain any additional data that will be saved and passed back
 * @property {string} file.url - [Required] image source URL
 */

class image_ImageTool {
  /**
   * Get Tool toolbox settings
   * icon - Tool icon's SVG
   * title - title to show in toolbox
   *
   * @return {{icon: string, title: string}}
   */
  static get toolbox() {
    return {
      icon: '<svg width="17" height="15" viewBox="0 0 336 276" xmlns="http://www.w3.org/2000/svg"><path d="M291 150.242V79c0-18.778-15.222-34-34-34H79c-18.778 0-34 15.222-34 34v42.264l67.179-44.192 80.398 71.614 56.686-29.14L291 150.242zm-.345 51.622l-42.3-30.246-56.3 29.884-80.773-66.925L45 174.187V197c0 18.778 15.222 34 34 34h178c17.126 0 31.295-12.663 33.655-29.136zM79 0h178c43.63 0 79 35.37 79 79v118c0 43.63-35.37 79-79 79H79c-43.63 0-79-35.37-79-79V79C0 35.37 35.37 0 79 0z"/></svg>',
      title: '图片'
    };
  }
  /**
   * @param {ImageToolData} data - previously saved data
   * @param {ImageConfig} config - user config for Tool
   * @param {object} api - Editor.js API
   */


  constructor({
    data,
    config,
    api
  }) {
    this.api = api;
    /**
     * Tool's initial config
     */

    this.config = {
      endpoints: config.endpoints || '',
      additionalRequestData: config.additionalRequestData || {},
      additionalRequestHeaders: config.additionalRequestHeaders || {},
      field: config.field || 'image',
      types: config.types || 'image/*',
      captionPlaceholder: config.captionPlaceholder || 'Caption',
      buttonContent: config.buttonContent || '',
      uploader: config.uploader || undefined
    };
    /**
     * Module for file uploading
     */

    this.uploader = new uploader_Uploader({
      config: this.config,
      onUpload: response => this.onUpload(response),
      onError: error => this.uploadingFailed(error)
    });
    /**
     * Module for working with UI
     */

    this.ui = new Ui({
      api,
      config: this.config,
      onSelectFile: () => {
        this.uploader.uploadSelectedFile({
          onPreview: src => {
            this.ui.showPreloader(src);
          }
        });
      }
    });
    /**
     * Module for working with tunes
     */

    this.tunes = new tunes_Tunes({
      api,
      onChange: tuneName => this.tuneToggled(tuneName)
    });
    /**
     * Set saved state
     */

    this._data = {};
    this.data = data;
  }
  /**
   * Renders Block content
   * @public
   *
   * @return {HTMLDivElement}
   */


  render() {
    return this.ui.render(this.data);
  }
  /**
   * Return Block data
   * @public
   *
   * @return {ImageToolData}
   */


  save() {
    const caption = this.ui.nodes.caption;
    this._data.caption = caption.innerHTML;
    return this.data;
  }
  /**
   * Makes buttons with tunes: add background, add border, stretch image
   * @public
   *
   * @return {Element}
   */


  renderSettings() {
    return this.tunes.render(this.data);
  }
  /**
   * Fires after clicks on the Toolbox Image Icon
   * Initiates click on the Select File button
   * @public
   */


  appendCallback() {
    this.ui.nodes.fileButton.click();
  }
  /**
   * Specify paste substitutes
   *
   * @see {@link https://github.com/codex-team/editor.js/blob/master/docs/tools.md#paste-handling}
   */


  static get pasteConfig() {
    return {
      /**
       * Paste HTML into Editor
       */
      tags: ['img'],

      /**
       * Paste URL of image into the Editor
       */
      patterns: {
        image: /https?:\/\/\S+\.(gif|jpe?g|tiff|png)$/i
      },

      /**
       * Drag n drop file from into the Editor
       */
      files: {
        mimeTypes: ['image/*']
      }
    };
  }
  /**
   * Specify paste handlers
   * @public
   *
   * @see {@link https://github.com/codex-team/editor.js/blob/master/docs/tools.md#paste-handling}
   */


  async onPaste(event) {
    switch (event.type) {
      case 'tag':
        // eslint-disable-next-line
        const image = event.detail.data;
        /** Images from PDF */

        if (image.src.startsWith('blob:')) {
          const response = await fetch(image.src);
          const file = await response.blob();
          this.uploadFile(file);
          break;
        }

        this.uploadUrl(image.src);
        break;

      case 'pattern':
        // eslint-disable-next-line
        const url = event.detail.data;
        this.uploadUrl(url);
        break;

      case 'file':
        // eslint-disable-next-line
        const file = event.detail.file;
        this.uploadFile(file);
        break;
    }
  }
  /**
   * Private methods
   * ̿̿ ̿̿ ̿̿ ̿'̿'\̵͇̿̿\з= ( ▀ ͜͞ʖ▀) =ε/̵͇̿̿/’̿’̿ ̿ ̿̿ ̿̿ ̿̿
   */

  /**
   * Stores all Tool's data
   * @private
   *
   * @param {ImageToolData} data
   */


  set data(data) {
    this.image = data.file;
    this._data.caption = data.caption || '';
    this.ui.fillCaption(this._data.caption);
    tunes_Tunes.tunes.forEach(({
      name: tune
    }) => {
      const value = data[tune] !== undefined ? data[tune] : false;
      this.setTune(tune, value);
    });
  }
  /**
   * Return Tool data
   * @private
   *
   * @return {ImageToolData} data
   */


  get data() {
    return this._data;
  }
  /**
   * Set new image file
   * @private
   *
   * @param {object} file - uploaded file data
   */


  set image(file) {
    this._data.file = file || {};

    if (file && file.url) {
      this.ui.fillImage(file.url);
    }
  }
  /**
   * File uploading callback
   * @private
   *
   * @param {UploadResponseFormat} response
   */


  onUpload(response) {
    if (response.success && response.file) {
      this.image = response.file;
    } else {
      this.uploadingFailed('incorrect response: ' + JSON.stringify(response));
    }
  }
  /**
   * Handle uploader errors
   * @private
   *
   * @param {string} errorText
   */


  uploadingFailed(errorText) {
    // eslint-disable-next-line
    console.log('Image Tool: uploading failed because of', errorText);
    this.api.notifier.show({
      message: '图片上传失败，请刷新网页重试',
      style: 'error'
    });
    this.ui.hidePreloader();
  }
  /**
   * Callback fired when Block Tune is activated
   * @private
   *
   * @param {string} tuneName - tune that has been clicked
   */


  tuneToggled(tuneName) {
    // inverse tune state
    this.setTune(tuneName, !this._data[tuneName]);
  }
  /**
   * Set one tune
   * @param {string} tuneName - {@link Tunes.tunes}
   * @param {boolean} value - tune state
   */


  setTune(tuneName, value) {
    this._data[tuneName] = value;
    this.ui.applyTune(tuneName, value);

    if (tuneName === 'stretched') {
      const blockId = this.api.blocks.getCurrentBlockIndex();
      setTimeout(() => {
        /** Wait until api is ready */
        this.api.blocks.stretchBlock(blockId, value);
      }, 0);
    }
  }
  /**
   * Show preloader and upload image file
   *
   * @param {File} file
   */


  uploadFile(file) {
    this.uploader.uploadByFile(file, {
      onPreview: src => {
        this.ui.showPreloader(src);
      }
    });
  }
  /**
   * Show preloader and upload image by target url
   *
   * @param {string} url
   */


  uploadUrl(url) {
    this.ui.showPreloader(url);
    this.uploader.uploadByUrl(url);
  }

  validate(savedData) {
    return !(!savedData.file || !savedData.file.url);
  }

}

/***/ })

};;
//# sourceMappingURL=24.js.map