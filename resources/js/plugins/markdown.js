import VueMarkdownEditor from '@kangc/v-md-editor';
import '@kangc/v-md-editor/lib/style/base-editor.css';
import vuepressTheme from '@kangc/v-md-editor/lib/theme/vuepress.js';
import '@kangc/v-md-editor/lib/theme/style/vuepress.css';
import Vue from 'vue'

import enUS from '@kangc/v-md-editor/lib/lang/en-US';


import '@kangc/v-md-editor/lib/style/preview-html.css';
import VMdPreviewHtml from '@kangc/v-md-editor/lib/preview-html';
Vue.use(VMdPreviewHtml);


VueMarkdownEditor.lang.use('en-US', enUS);

VueMarkdownEditor.use(vuepressTheme);

Vue.use(VueMarkdownEditor);




