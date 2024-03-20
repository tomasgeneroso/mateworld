import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';

function ProfileKey() {
  return (
    <Stack gap={3}>
        <Stack direction="horizontal" gap={3}>
        <Form.Control className="me-auto" placeholder="Add your item here..." />
        <Button variant="outline-danger">Edit</Button>
        <div className="vr" />
        <Button variant="secondary">Submit</Button>
        </Stack>
    </Stack>
  );
}

export default ProfileKey;