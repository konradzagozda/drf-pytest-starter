import pytest
from django.urls import reverse
from rest_framework.authentication import get_user_model
from rest_framework.test import APIClient

from example_app.models import Message

User = get_user_model()


@pytest.mark.django_db
def test_message_viewset():
    # Arrange
    Message.objects.create(text="Test message")
    test_user = User.objects.create_user(username="testuser", password="testpass")
    client = APIClient()
    client.force_authenticate(test_user)

    # Act
    response = client.get(reverse("message-list"))

    # Assert
    assert response.status_code == 200
    assert len(response.data) == 1
    assert response.data[0]["text"] == "Test message"
