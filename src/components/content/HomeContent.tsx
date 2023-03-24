import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography';
import { useEffect } from 'react'
import { Posts } from '../../entities/Posts';
import { RootState } from '../../services/store';
import { useAppDispatch, useAppSelector } from '../../services/store/hooks'
import { postsThunk } from '../../services/store/thunks';

export const HomeContent = () => {
	const dispatch = useAppDispatch();
	const { posts } = useAppSelector((state: RootState) => state);
	useEffect(() => {
		if (posts.length === 0) {
			dispatch(postsThunk.fetch());
		}
	}, [posts, dispatch]);
	return (
		<Box>
			{posts && posts.map((item: Posts) => (
				<Box key={item.id}>
					<Typography variant="h4">{item.title}</Typography>
					<Typography variant="h6">{item.userId}</Typography>
				</Box>
			))}
		</Box>
	)
}
