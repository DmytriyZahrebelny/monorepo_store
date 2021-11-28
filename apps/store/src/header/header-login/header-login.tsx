import { useQuery } from '@apollo/client';
import { Typography } from 'antd';

import { Icon } from '@monorepo-store/icon';
import MeQuery from '../../graphql/Me.query.gql';
import { MeQueryType } from '../../types';

export const HeaderLogin = () => {
  const { data } = useQuery<MeQueryType>(MeQuery);

  return (
    <div>
      <Icon name="user" size={{ width: 40, height: 40 }} />
      <Typography.Text>{data?.me?.name || 'Sign in'}</Typography.Text>
    </div>
  );
};
