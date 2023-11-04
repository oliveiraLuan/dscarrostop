import Comment from '../../components/Comment';
import './styles.css';

export default function Comments(){
    return (
        <section id='section-comments'>
            <h2>O que estão dizendo</h2>
            <div className='comments-container'>
                <Comment/>
                <Comment/>
                <Comment/>
                <Comment/>
                <Comment/>
                <Comment/>
            </div>
        </section>
    );
}