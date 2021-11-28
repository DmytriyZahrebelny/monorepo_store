import { Field, Form } from '@monorepo-store/form-components';
import { useHeaderSearch } from './use-header-search';

export const HeaderSearch = () => {
  const { onSubmit } = useHeaderSearch();

  return (
    <Form onSubmit={onSubmit}>
      <Field type="search" name="search" enterButton placeholder="search" allowClear />
    </Form>
  );
};
