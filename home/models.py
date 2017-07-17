from django.db import models



# Homepage carousel to be curated
class HomeCarousel(models.Model):
    title       = models.CharField(max_length=120, null=True, blank=True)
    image       = models.ImageField()
    description = models.CharField(max_length=200, null=True, blank=True)

    def __str__(self):
        return self.title
          
# Homepage marketing to be curated
class Marketing(models.Model):
    title   = models.CharField(max_length=200, null=True, blank=True)
    image   = models.ImageField()
    reason  = models.CharField(max_length=300, null=True, blank=True) 

    def __str__(self):
        return self.title 