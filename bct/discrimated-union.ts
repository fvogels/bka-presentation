type RestStatus<T> =
    | { readonly status: 'loading' }
    | { readonly status: 'error';
        readonly tag: ErrorTag;
        readonly details: string }
    | { readonly status: 'success';
        readonly value: T };

function pickComponent(restStatus: RestStatus<Data>)
        : React.ReactElement {
    switch ( restStatus.status ) {
        case 'loading': // ...
        case 'error': // ...
        case 'success': // ...
    }
}