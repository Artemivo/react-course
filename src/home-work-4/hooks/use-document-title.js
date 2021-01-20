import React , {useEffect , useState} from 'react';

export   function useDocumentTitle(title) {

  useEffect(() => {
    document.title = title;
  }, [title]);
  
}
