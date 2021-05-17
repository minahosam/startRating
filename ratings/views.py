from django.shortcuts import render
from .models import rate
from django.http import JsonResponse
# Create your views here.
def photo_rate(request):
    all=rate.objects.filter(ratee=0).order_by('?').first()
    return render(request,'ratings/main_page.html',{'all':all})
def rate_image(request):
    if request.method=='GET':
        pic_id=request.GET.get('pic_id')
        score=request.GET.get('pic_rate')
        object=rate.objects.get(id=pic_id)
        object.ratee=score
        object.save()
        return JsonResponse({'success':'true' , 'ratee':score},safe=False)
    return JsonResponse({'success':'false'})