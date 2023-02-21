import React from 'react';
import classNames from 'classnames';
import { UserInfo } from '../UserInfo/UserInfo';
import { Todo } from '../../types/Todo';

type Props = {
  todo: Todo;
};

export const TodoInfo: React.FC<Props> = ({ todo }) => {
  const {
    id,
    title,
    user,
    completed,
  } = todo;

  return (
    <li
      data-id={id}
      className={classNames(
        'todoInfo',
        {
          'todoInfo--completed': completed,
        },
      )}
    >

      <h2 className="todoInfo__title">{title}</h2>

      {user && <UserInfo user={user} />}
    </li>
  );
};
