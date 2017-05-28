import {whiteListIframe} from 'pretty-text/sanitizer';

whiteListIframe(/^(https?:)?\/\/gokibitz\.com\/embed\/.+/i);
whiteListIframe(/^(https?:)?\/\/gokibitz\.com\/kifu\/.+/i);
